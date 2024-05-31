export default function Button({children}){
    function handleClick(event){
        window.alert("Button clicked");

    };
    return<button onClick={handleClick}>{children}</button>
}