import { style } from "@vanilla-extract/css";

export const styles = {
    container : style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "120px",
    }),

    loginBox : style({
        borderRadius: "10px",
        padding: "3rem",
        backgroundColor: "#fafafa",
        width: "400px",
        textAlign: "center",
    }),

    hStyle : style({
        color: "#000",
        fontSize: "20px",
        marginBottom: "5px",
        fontWeight: "bold",
    }),

    inputGroup : style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        height: "100%",
    }),

    inputWrapper : style({
        display: "flex",
        flexDirection: "column",
        width: "65%",
        height: "100%",
    }),

    inputStyle : style({
        width: "100%",
        height: "35px",
        margin: "3px",
        padding: "5px",
        color: "#000",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontSize: "12px",
    }),

    buttonStyle : style({
        width: "30%",
        height: "76px",
        padding: "10px",
        backgroundColor: "#86DA7F",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px 0",
        fontSize: "16px",
    }),

    email : style({
        color: "#7EB49A",
        fontSize: "12px",
        textDecoration: "underline",
        ":hover": {
            color: "#5C8B7B",
        },
    }),

    divider : style({
        width: "100%",
        height: "1px",
        backgroundColor: "#ccc",
        margin: "20px 0", 
    }),

    socialLogin : style({
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginTop: "20px",
        alignItems: "center",
    }),

    h6Style : style({
        color: "#000",
    }),

    googleButton : style({
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #e3e3e3",
        borderRadius: "20px",
        width: "65%",
        height: "35px",
        cursor: "pointer",
    }),

    kakaoButton : style({
        backgroundColor: "#fee500",
        color: "#000",
        border: "none",
        borderRadius: "20px",
        width: "65%",
        height: "35px",
        cursor: "pointer",
    }),

    naverButton : style({
        backgroundColor: "#1ec800",
        color: "#fff",
        border: "none",
        borderRadius: "20px",
        width: "65%",
        height: "35px",
        cursor: "pointer",
    }),

    logo : style({
        width: "20px",
        height: "auto",
        marginRight: "8px",
        verticalAlign : "middle",
    }),
}
