import PageHeader from "../../components/PageHeader";
import {faCog, faCubes} from "@fortawesome/free-solid-svg-icons";
import ContentBox from "../../components/ContentBox";
import InputBox from "../../components/InputBox";
import InputTextBox from "../../components/InputTextBox";
import Button from "../../components/Button";
import {useEffect, useState} from "react";
import axios from "../../lib/AxiosConfig";
import LoadingComponent from "../../components/LoadingComponent";
import {useRouter} from "next/router";

const ManageCategory = ({data})=>{
    const [categoryTitle, setCategoryTitle] = useState('')
    const [categoryDescription, setCategoryDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    useEffect(()=>{
        if (data !== null){
            setCategoryTitle(data.title)
            setCategoryDescription(data.short_description)
        }
    }, [])

    const handleSubmit = (e) => {
        // makes the loading modal show
        setLoading(true)
        e.preventDefault();
        const values = {
            categoryTitle, categoryDescription
        }
        if (data === null){
            axios.post('/categories', values).then(
                r=>{
                    console.log(r)
                    console.log("Submitted")
                    setCategoryTitle("")
                    setCategoryDescription("")
                    setTimeout(()=>setLoading(false), 2000)
                }).catch(err=>{
                setTimeout(()=>setLoading(false), 2000)
                console.log(err)
            })
        } else {
            axios.put(`/category/${data.id}`, values).then(
                r=>{
                    setTimeout(()=>{
                        setLoading(false)
                        router.push('/category')
                    }, 2000)
                }
            ).catch(err=>{
                console.log(err)
                setTimeout(()=>setLoading(false), 2000)
            })
        }
    }
    return (
        <>
            {
                loading && <LoadingComponent/>
            }
            <form onSubmit={handleSubmit}>
            <PageHeader mainTitle={'Categories / Insert New'} title={'Insert Category'} icon={faCubes}/>
            <ContentBox contentTitle={'Insert Category'}>
                <InputBox title={"Category Title :"} onChange={(e)=>setCategoryTitle(e.target.value)} value={categoryTitle}/>
                <InputTextBox title={'Category Description :'}  onChange={(e)=>setCategoryDescription(e.target.value)} value={categoryDescription}/>
                <Button title={"Insert Category"}/>
            </ContentBox>
            </form>
        </>
    )
}

export default ManageCategory

export async function getServerSideProps(context){
    let data;
    const categoryId = context.query.edit;
    if (categoryId !== undefined){
        await axios.get(`/category/${categoryId}`).then(
            (res)=>{
                data = res.data
            }
        )
    } else {
        data = null
    }

    return {
        props:{
            data: data
        }
    }
}