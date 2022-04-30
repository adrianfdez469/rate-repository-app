import { Card, CardHeader } from '../Card'

const ReviewCard = ({title, avatarShorttext, subHeader, text, children}) => {
  return (
    <Card>
      <CardHeader 
        title={title}
        avatarShorttext={avatarShorttext}
        subHeader={subHeader}
        text={text}
      />
      {children}
    </Card>
  );
}

export default ReviewCard;