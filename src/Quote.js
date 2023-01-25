import styled from "styled-components"

const Blockquote = styled.blockquote`
    background-color: lightgrey;
    width: 20%;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
`
const Cite = styled.cite`
    text-align: center;
    margin-left: 10%;
`


const Quote = ({by, source, children}) => {

    return(
    <figure>
        <Blockquote>
            {children}
        </Blockquote>
        <figcaption>
            <Cite> 
            <a href={source}>{by}</a>
            </Cite>
        </figcaption>
    </figure>
    )
}

export default Quote