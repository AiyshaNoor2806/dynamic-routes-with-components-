
import countries from "@/app/data/data";
import Link from "next/link";
import CountryNames from "@/app/components/CountryName";

export default function CountryName({params}:{params:{country_name:string}}) {

   

    function findCountry(country_url:string){

        return countries.find(country => country.name.toLowerCase() === country_url.toLowerCase())
    }

    const result = findCountry(params.country_name);
        
    return(
        <div>
            <h1 className="bg-red-400">Go To <Link href={'/'}>Home</Link></h1>
            <br />
            {
                result ? (
                    <>
                    <CountryNames
                     name={result.name} 
                    population={result.population} 
                    capital={result.capital}/>  
                     </>
                ) : (
                    <h1>country not found</h1>
                )
            }
           
                      
        </div>
    )
}