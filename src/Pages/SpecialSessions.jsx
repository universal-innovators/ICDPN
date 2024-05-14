import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SpecialSessions = () => {
  return (
    <div>
      <div className="w-[90%] mt-6 mx-auto text-center text-blue-950 font-bold text-3xl bg-green-500 p-3 rounded-tl-3xl rounded-br-3xl">
        Special Sessions
      </div>
      <div className="w-10/12 h-[1px] ml-10 mt-4 bg-gray-400"></div>
      <br />
      <div className="grid gap-y-11 sm:grid-cols-4 ml-6">
        {/* <Card className="hover:scale-110 h-[300px] bg-violet-950 shadow-xl shadow-violet-950 text-white duration-1000 w-[300px]  rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-3xl">
          <CardHeader>
            <CardTitle className="text-sm">
              Session - 1:Media and Games in Education and Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Organisers
              <br />
              Faizan Ahmad, Cardiff Metropolitan University, Cardiff UK. Momina
              Shaheen, University of Roehampton London, UK
            </p>
          </CardContent>
          <CardFooter>
            <p>
              Listing
              <br />
              SS 001.pdf
            </p>
          </CardFooter>
        </Card> */}
        
      </div>
    </div>
  );
};

export default SpecialSessions;
