using Infrastructure.Model;
namespace Infrastructure.HttpResponse;

public class ApiResponse<T>
{
    public int StatusCode { get; set; }
    public T Data { get; set; }
    public string ErrorMessage { get; set; }


    public static ApiResponse<T> Success(int statusCode, T data)
    {
        return new ApiResponse<T> { StatusCode = statusCode, Data = data };
    }

    public static ApiResponse<NoData> Success(int statusCode)
    {
        return new ApiResponse<NoData> { StatusCode = statusCode };
    }

    public static ApiResponse<T> Fail(int statusCode, string errorMessage)
    {
        return new ApiResponse<T> { StatusCode = statusCode, ErrorMessage = errorMessage };
    }

}
