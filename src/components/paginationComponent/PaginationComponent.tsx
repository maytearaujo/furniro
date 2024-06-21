
const PaginationComponent = ({setCurrentPage, pages}) => {
    return (
        <div>
            {Array.from(Array(pages), (_item, index) => {
                return <button value={index} onClick={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
            })}
        </div>
    )
}

export default PaginationComponent
