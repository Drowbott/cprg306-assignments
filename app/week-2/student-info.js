const { default: Link } = require("next/link")




const StudentInfo = () => {
    return(
        <div>
            <h1>Daniel Rowbottom</h1>
            <Link href="https://github.com/Drowbott">https://github.com</Link>
        </div>
    )
}

export default StudentInfo;