const AdminButton = () => {
  return (
    <div>
              {/* admin button */}
      <div className="relative ">
        <div className="absolute right-98 top-5 cursor-pointer">
          <button
            onClick={() => window.open(" http://localhost:5174/", "_blank")}
            className="bg-black text-white px-2 py-1 rounded"
          >
            Admin Panel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminButton