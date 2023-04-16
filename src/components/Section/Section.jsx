export const Section = ({title,children}) =>{
    console.log(children);
    return (
        
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}