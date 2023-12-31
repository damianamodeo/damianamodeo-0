import { Button } from '@damianamodeo/ui/inputs';

type HomePageProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

export function Home({ changeSubpage }: HomePageProps) {
  const pages = ['Editlocalstorage',"Localstorage"];
  
  //console.log('Home', `${variable}`)
  return (
    <div className={`dark: text-white center-h-col gap-2 p-2`}>
      
      {pages.map((page: string, index: number) => {
        return (
          <Button
            onClick={() => changeSubpage(page, '<')}
            width={'auto'}
            key={page}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
}

export default Home;
