const ListItems = (data) => {
    return (
        <>
            {data?.data?.length && <div>
                <h3>Five most used words are: </h3>
                <ul style={{listStyleType: 'none'}}>
                    {
                        data?.data?.map((item) => {
                            return (
                                <li key={item.toString()}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>}
        </>
    )
}

export default ListItems;