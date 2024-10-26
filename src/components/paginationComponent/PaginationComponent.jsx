
const PaginationComponent = ({setCurrentPage, pages}) => {
    return (
        <div>
            {Array.from(Array(pages), (_item, index) => {
                return (
                    <button
                        key={index}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}
                    </button>
                );
            })}
        </div>
    )
}

export default PaginationComponent
