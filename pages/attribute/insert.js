import PageBody from "../../components/PageBody";
import {faStackExchange} from "@fortawesome/free-brands-svg-icons";
import InputBox from "../../components/InputBox";
import ObjectListSelectBox from "../../components/ObjectListSelectBox";
import Button from "../../components/Button";
import axios from "../../lib/AxiosConfig"
import {useState, useEffect} from "react";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";

const InsertAttributes = ({categories, attribute}) => {
  const [category, setCategory] = useState(categories)
    const [categoryId, setCategoryId] = useState('default')
  const [subcategories, setSubcategories] = useState([])
  const [subcategoryId, setSubcategoryId] = useState('default')
  const [rangeVisible, setRangeVisible] = useState(false);
  const [attributeName, setAttributeName] = useState('')
    const [attributeRange, setAttributeRange] = useState('')
    const [attributeType, setAttributeType] = useState("default")
    const [extraTitle, setExtraTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if (attribute !== null){
            setAttributeName(attribute.specification)
            console.log(attributeType)
            setAttributeType(attribute.type)
            setCategoryId(attribute.sub_category.category_id)
            if (attribute.drop_down_range) {
                setAttributeRange(attribute.drop_down_range)
            }
            setExtraTitle(attribute.extra_spec_title)
        }
    },[])
    useEffect(()=>{
        if (attribute !== null){
            let category = categories.find(element => element.id == categoryId)
            if (category !== undefined){
                setSubcategories(category.sub_categories)
                setSubcategoryId(attribute.sub_category_id)
            }
        }
    },[categoryId])

  const handleSubmit = (e) => {
      setIsLoading(true)
      e.preventDefault()
      let data;
      if (rangeVisible){
          data = {
              subcategoryId, attributeRange, attributeName, extraTitle, attributeType
          }
      }else {
          data = {
              subcategoryId, attributeName, extraTitle, attributeType
          }
      }
      if (attribute !== null){
          axios.put(`/package_spec/${attribute.id}`, data).then((res)=>{
              console.log(res)
              setIsLoading(false)
              router.push('/attribute')
          }).catch(err=>{
              console.log(err)
              setIsLoading(false)
          })
      } else {
          axios.post('/package_spec', data).then((res)=>{
              console.log(res)
              setIsLoading(false)
              setAttributeType("default")
              setSubcategoryId('default')
              setCategoryId("default")
              setAttributeName('')
              setExtraTitle('')
              setAttributeRange("")
          }).catch(err=>{
              console.log(err)
              setIsLoading(false)
          })
      }
    console.table(data)
  }

  return (
      <>
          {
              isLoading && <LoadingComponent/>
          }
      <form onSubmit={handleSubmit}>
        <PageBody
            pageHeading={"Insert Attribute"}
            mainPageTitle={"Attributes / insert"}
            contentBoxTitle={"Insert Attribute"}
            icon={faStackExchange}>
          <ObjectListSelectBox
              title={"Select Category"}
              defaultTitle={"Select a category"}
              options={category}
              selected={categoryId}
              onChange={(e)=>{
                  setCategoryId(e.target.value)
                let [categ] = category.filter(element => element.id === parseInt(e.target.value))
                setSubcategories(categ.sub_categories)
              }
              }/>
          <ObjectListSelectBox
              title={"Select Subcategory"}
              defaultTitle={"Select a subcategory"}
              options={subcategories}
              selected={subcategoryId}
              onChange={(e)=>{
                setSubcategoryId(parseInt(e.target.value))
              }
              }
          />
          <InputBox title={"Attribute Name"} value={attributeName} onChange={(e)=>setAttributeName(e.target.value)} />
          <ObjectListSelectBox
              title={"Select Attribute Type"}
              selected={attributeType}
              onChange={(e)=>{
                setAttributeType(e.target.value)
                  // setAttributeType
                // if the selected is select then show the range option
                if (e.target.value === 'select'){
                  setRangeVisible(true)
                } else {
                  setRangeVisible(false)
                }
              }
              }
              defaultTitle={"Select Type"}
              options={
                [
                  {
                    id: "checkbox",
                    title: "checkbox",
                  },
                  {
                    id: "select",
                    title: "select",
                  },
                  {
                    id: "text",
                    title: "text"
                  }
                ]
              } />
          {
            rangeVisible && <InputBox title={"Input Attribute Range"} onChange={(e)=>setAttributeRange(e.target.value)} value={attributeRange}/>
          }
          <InputBox title={"Input Title for proposal Extra"} value={extraTitle} onChange={(e)=>setExtraTitle(e.target.value)}/>
          <Button title={"Submit"}/>
        </PageBody>
      </form>
      </>
  )
}

export default InsertAttributes

export async function getServerSideProps(context){
  let categories;
  let attribute;
    const attributeId = context.query.edit;
    await axios.get('/categories').then((res)=>{
    categories = res.data
    // console.log(res.data)
  }).catch((err)=>console.log(err));
  if (attributeId !== undefined){
      await axios.get(`/package_spec/${attributeId}`).then((res)=>{
          attribute = res.data
      }).catch((err)=>console.log(err))
  } else {
      attribute = null
  }

  return {
    props: {
      categories, attribute
    }
  }
}