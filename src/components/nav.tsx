import {Link} from "react-router-dom"

export default function Nav({options}: {options: {name:string,href:string}[]}) {
    return (
        <div className="flex flex-row p-4 bg-transparent justify-between">
            <div className="inline-block pr-3">
                <a className="px-3 py-1 font-bold border-2 border-gray-300 rounded-lg text-red-700 hover:border-red-700">Judge331</a>
            </div>
            <div className="flex flex-row inline-block space-x-1">
                {options.map(({name, href}) => (
                    <Link
                    key={name}
                    to={href}
                    className="px-3 py-1 font-bold bg-white border-2 border-gray-300 hover:text-green-700 hover:border-green-700 rounded-lg"
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}