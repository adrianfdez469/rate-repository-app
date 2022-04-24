import { Card, CardFooter, CardHeader } from '../Card'

export const parseNumberToThousens = (number) => {
  if(number > 999){
    const result = number/1000;
    const nstr = result.toString();
    const [intiger, decimal ] = nstr.split('.');
    const decimalDigit = decimal.charAt(0)
    return `${intiger}.${decimalDigit}k`;
  } else{
    return number
  }
}

const RepositiryItem = ({item}) => {

  const infos = [
    {
      value: parseNumberToThousens(item.stargazersCount),
      label: "Stars"
    },
    {
      value: parseNumberToThousens(item.forksCount),
      label: "Forks"
    },
    {
      value: parseNumberToThousens(item.reviewCount),
      label: "Reviews"
    },
    {
      value: parseNumberToThousens(item.ratingAverage),
      label: "Rating"
    },
  ];

  return (
    <Card>
      <CardHeader
        avatarUrl={item.ownerAvatarUrl} 
        title={item.fullName}  
        subHeader={item.description}
        tag={item.language}
      />
      <CardFooter infos={infos} />
    </Card>
  )

}
export default RepositiryItem;