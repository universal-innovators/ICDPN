import React from 'react'

const PrevVolumes = ({year,links}) => {
  return (
    <div className='my-4'>
        <h2 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Proceedings of International Conference on Data-Processing and Networking, ICDPN {year}</h2>
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
    
    <tbody>
        {links.map((link, ind) => (
            <tr key={ind} className="even:bg-gray-50 hover:white">
                <td className="p-2 border-b"><b>{`Volume ${ind + 1}`}</b></td>
                <td className="p-2 border-b">
                    <a 
                        href={link} 
                        className="text-blue-500 underline"
                    >
                        {`Link of the volume ${ind + 1}`}
                    </a>
                </td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default PrevVolumes