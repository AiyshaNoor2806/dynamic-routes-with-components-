
import Link from "next/link";
export default function country_name() {
  return (
    <div>
      <h1 className="bg-red-300">Country List</h1>
    
    <Link href="/country/pakistan" style={{margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>Pakistan</Link>
    <Link href="/country/india" style={{margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>India</Link>
    <Link href="/country/japan" style={{margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>Japan</Link>
    <Link href="/country/china" style={{margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>China</Link>
    <Link href="/country/afghanistan" style={{margin: "10px", borderRadius: "2px solid black", padding: "10px" }}>Afghanistan</Link>
    </div>
  );
}
