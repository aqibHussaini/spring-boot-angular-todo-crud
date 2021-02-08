package com.aqib.TodoApp.utils;

public class Response {
    private String message;

    @Override
    public String  toString() {
        return "seccessResponse{" +
                "message='" + message + '\'' +
                '}';
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Response() {
    }

    public Response(String message) {
        this.message = message;
    }
}
