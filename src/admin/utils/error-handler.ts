class ErrorHandler
{
    error(message)
    {
        throw new Error(message)
    }
}

export default new ErrorHandler();
