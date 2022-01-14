import PageHeader from "../../components/PageHeader";
import {faStackExchange} from "@fortawesome/free-brands-svg-icons";
import ContentBox from "../../components/ContentBox";
import InputBox from "../../components/InputBox";
import InputTextBox from "../../components/InputTextBox";
import Button from "../../components/Button";
import {useEffect, useState} from "react";
import axios from "../../lib/AxiosConfig";
import ObjectListSelectBox from "../../components/ObjectListSelectBox";
import InputImageFileBox from "../../components/InputImageFileBox";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";

const InsertSubCat = ({data, subcategory}) => {
    const [file, setFile] = useState('')
  const [subCategoryTitle, setSubCategoryTitle] = useState('')
  const [category, setCategory] = useState("default")
  const [subCategoryDescription, setSubCategoryDescription] = useState('')
    const [fileName, setFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    useEffect(()=>{
        if (subcategory !== null){
            setSubCategoryTitle(subcategory.title)
            setSubCategoryDescription(subcategory.description)
            setCategory(subcategory.category_id)
        }
    }, [])

  const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
      console.table({file, category, subCategoryTitle, subCategoryDescription})
        const formData = new FormData()
      formData.append('file', file)
      formData.append('categoryId', category)
      formData.append('subCategoryTitle', subCategoryTitle)
      formData.append('subCategoryDescription', subCategoryDescription)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
     if (subcategory === null){
         console.log(formData)
         axios.post('/subcategory', formData, config).then((res)=>{
             console.log(res)
             setSubCategoryDescription('');
             setCategory('default');
             setFileName('');
             setFile();
             setSubCategoryTitle('');
             setIsLoading(false);
         }).catch(err=>{
             console.log(err)
             setIsLoading(false)
         })
     } else {
         // for updating the subcategory
         console.log(formData)
         axios.post(`/subcategory/${subcategory.id}`, formData, config).then((res)=>{
             console.log(res)
             setIsLoading(false);
             router.push('/subcategory')
         }).catch(err=>{
             console.log(err)
             setIsLoading(false)
         })
     }
      console.log(file, "file")

  }
  return (
      <>
          {
              isLoading && <LoadingComponent/>
          }
          <form onSubmit={handleSubmit}>
        <PageHeader mainTitle={'Subcategories / Insert New'} title={'Insert Sub Category'} icon={faStackExchange}/>
        <ContentBox contentTitle={'Insert Subcategory'}>
          <InputBox title={"Subcategory Title :"} onChange={(e)=>setSubCategoryTitle(e.target.value)} value={subCategoryTitle}/>
          <InputTextBox title={'Subcategory Description :'}  onChange={(e)=>setSubCategoryDescription(e.target.value)} value={subCategoryDescription}/>
          <InputImageFileBox title={"Subcategory Image"} value={fileName}  onChange={(e)=>{
              setFile(e.target.files[0])
              setFileName(e.target.value)
          }}/>
          <ObjectListSelectBox
              title={'Subcategory Parent'}
              defaultTitle={"Please Select Parent"}
              options={data}
              onChange={(e)=>setCategory(e.target.value)}
              selected={category} />
          <Button title={"Insert Subcategory"}/>
        </ContentBox>
          </form>
      </>
  )
}

export default InsertSubCat

export async function getServerSideProps(context){
    let data
    let subcategory;
    const subcategoryId = context.query.edit;
    if (subcategoryId !== undefined){
        await axios.get(`/subcategory/${subcategoryId}`).then(
            (res)=>{
                subcategory = res.data
            }
        )
    } else {
        subcategory = null
    }

    await axios.get('/category').then(
        (res)=>{
            data = res.data
        }
    ).catch(err=>console.log(err))
    return {
        props: {
            data,
            subcategory: subcategory
        }
    }
}
