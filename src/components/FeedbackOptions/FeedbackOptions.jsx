import { Button, Container } from './FeedbackOptions.styled';


export const FeedbackOptions  = ({options,onLeaveFeedback}) => {
    
    return (
      <Container>
       {options.map((item,i) => <Button key={i} name={item.toLowerCase()} onClick={onLeaveFeedback}>{item}</Button>)}
      </Container>
    );
}
