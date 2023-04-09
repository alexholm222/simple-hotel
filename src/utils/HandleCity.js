import { City } from "./constRussiaCity";

export default function HandleCity(query) {
    const result = City.filter(city => city.city.toLowerCase().startsWith(query.toLowerCase()));
    return result.slice(0, 7);
}

