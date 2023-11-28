const Lesson7 = (props) => {
    function myFunction() {
        console.log(11111111111);
    }
    let a = function () {
        console.log(11111111111);
    }
    setTimeout(function () {
        console.log(1111111111);
    }, 2000)
    return (
        <div style={{ padding: "50px" }}>
            {console.log('render')}
            <h3>Lesson 7 Anonymous Function:</h3>
        </div>
    )
}

export default Lesson7;