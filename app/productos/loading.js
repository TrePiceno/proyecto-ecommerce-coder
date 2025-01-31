const Loading = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <div className="absolute w-12 h-12 border-4 border-purple-500 border-solid rounded-full animate-ping"></div>
                <div className="absolute w-8 h-8 border-4 border-pink-500 border-solid rounded-full animate-bounce"></div>
            </div>
        </div>
    )
}

export default Loading;