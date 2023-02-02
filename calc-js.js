const ac = () => {
    document.getElementById('input').value = ""

}

const mosavi = () => {
    document.getElementById('input').value;
}


const c = () => {
    let len = document.getElementById("input").value.length;

    document.getElementById("input").value = document.getElementById("input").value.substring(0, len - 1)

    if(len ===1){
        document.getElementById('input').value = "0.0"
    }
}



//const seven =() => {
//   document.getElementById("input").value = "7"
//}

const seven = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "7"
    }else{
        document.getElementById("input").value += "7"
    }

}


const eight = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "8"
    }else{
        document.getElementById("input").value += "8"
    }
}

const nine = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "9"
    }else{
        document.getElementById("input").value += "9"
    }
}

const four = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "4"
    }else{
        document.getElementById("input").value += "4"
    }
}

const five = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "5"
    }else{
        document.getElementById("input").value += "5"
    }
}

const six = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "6"
    }else{
        document.getElementById("input").value += "6"
    }
}

const one = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "1"
    }else{
        document.getElementById("input").value += "1"
    }
}

const tow = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "2"
    }else{
        document.getElementById("input").value += "2"
    }
}
const three = () => {
    if(document.getElementById('input').value === "0.0"){
        document.getElementById("input").value = "3"
    }else{
        document.getElementById("input").value += "3"
    }
}

const zero = () => {
    if(document.getElementById("input").value === '0.0'){
        document.getElementById("input").value = "0"
    }else{
        document.getElementById("input").value += "0"
    }
}

const zarb = () => {
    document.getElementById("input").value += "*"
}

const taqsim = () => {
    document.getElementById("input").value += "/"
}

const jam = () => {
    document.getElementById("input").value += "+"
}

const tafriq = () => {
    document.getElementById("input").value += "-"
}

const darsad = () => {
    document.getElementById("input").value += "%"
}

const dot = () => {
    document.getElementById("input").value += "."



}

