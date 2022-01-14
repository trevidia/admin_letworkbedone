const Button = ({title, callback})=>{
    return <div className={'py-2 flex flex-col md:flex-row sm:w-full'}>
            <div className={'mb-4 w-1/2 lg:w-1/4'}>

            </div>
            <button className={'rounded w-full md:w-1/2 h-10 resize-none bg-green-600 text-white'} onClick={callback}>
                {title}
            </button>
        </div>

}
export default Button