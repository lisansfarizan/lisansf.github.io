import SupportCard from './SidebarComponents/SupportCard.jsx'
import Tags from './SidebarComponents/Tags.jsx'
import Ads from './SidebarComponents/Ads.jsx'

export default function Sidebar() {
    return (
        <>
        <div id="sidebar">
            <SupportCard/>
            <Tags/>
            <Ads/>
        </div>
        </>
    )
}