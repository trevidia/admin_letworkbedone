import AdminLayout from "../components/AdminLayout";
import '../public/globals.css'

function MyApp({ Component, pageProps }) {
    return <AdminLayout>
        <Component {...pageProps} />
    </AdminLayout>
}

export default MyApp