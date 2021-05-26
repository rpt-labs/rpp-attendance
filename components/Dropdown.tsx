const Dropdown = () => {
  // @note: when this component is used in more than one place, the options should be passed in as props
  const options = ['alum', 'deferred', 'dismissed', 'enrolled', 'mulligan', 'withdrew']

  return (
    <div className="p-10">
      <div className="dropdown inline-block relative">
        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center w-46">
          <span className="mr-1">Select a status</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-46">
          {options.map((option) => (
            <li className="">
              <a className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown