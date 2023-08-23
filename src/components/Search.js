function Search({updateSearchText}){
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                // onChange={(event) => console.log(event.target.value)}
                onChange={updateSearchText}
            />
        </div>
    )
}

export default Search;