import { Kansumahh } from "./uctxt";



export default function Component2(){
    return (
        <Kansumahh>
          {(username) => {
            return <div>Hello {username}</div>;
          }}
        </Kansumahh>
      );

}

