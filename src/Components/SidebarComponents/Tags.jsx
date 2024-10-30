export default function Tags() {
    const tags = [
        "MMORPG", "Games Online", "Toram Online", "Elektronik"
    ]

    return (
        <>
        <div className="sidebar-tags">
            <p id="title-tags">Tags</p>
            <div>
                {tags.map(x => (
                    <>
                    <a href>{x}</a>
                    </>
                ))
                    
                }
            </div>
        </div>
        </>
    )
}