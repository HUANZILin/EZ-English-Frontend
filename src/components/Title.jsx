import Container from "./UI/Container";

const Title = (props) => {
    return(
        <Container>
            <h1 style={{color: "#e2e4dd",
            letterSpacing: "1rem",
            textAlign: "center"}}>{props.title}</h1>
            <div style={{margin: "0 auto",
            height: "0.2rem",
            width: "50vw",
            backgroundColor: "#e2e4dd",}}></div>
        </Container>
    );
};

export default Title;