export default function Paragraph(coisas){
    return(
        <p className={coisas.cor}>{coisas.children}</p>
    )
}