export class AppUtils {

    static get(url:string, headers:HeadersInit){
        return fetch(url, {
            method:"GET",
            headers
        })
    }

    static post(url:string, headers:HeadersInit, body: object){
        return fetch(url, {
            headers,
            body: JSON.stringify(body)
        })
    }
}