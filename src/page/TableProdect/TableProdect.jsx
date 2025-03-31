import axios from "axios";
import { ArrowDownUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const TableProduct = () => {
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc'
    });

    const fetchList = async () => {
        const response = await axios.get(`/api/food/list`);
        if (response.data.success) {
            setList(response.data.data);
        } else {
            console.log(response.data.message);
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedList = [...list].sort((item, item2) => {
        if (sortConfig.key) {
            if (item[sortConfig.key] < item2[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (item[sortConfig.key] > item2[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedList.length / itemsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const TableHeader = () => (
        <thead className="ltr:text-left rtl:text-right bg-gray-50">
            <tr>
                <th className="px-4 py-3 text-base-medium">Image</th>
                <th className="px-4 py-3 text-base-medium cursor-pointer hover:bg-gray-100" onClick={() => handleSort('name')}>
                    Name
                    <ArrowDownUp className={`inline-block size-4 mx-1 ${sortConfig.key === 'name' ? 'text-blue-500' : ''} ${sortConfig.direction === 'desc' && sortConfig.key === 'name' ? 'rotate-180' : ''}`} />
                </th>
                <th className="px-4 py-3 text-base-medium cursor-pointer" onClick={() => handleSort('category')}>
                    Category
                    <ArrowDownUp className={`inline-block size-4 mx-1 ${sortConfig.key === 'category' ? 'text-blue-500' : ''} ${sortConfig.direction === 'desc' && sortConfig.key === 'category' ? 'rotate-180' : ''}`} />
                </th>
                <th className="px-4 py-3 text-base-medium cursor-pointer" onClick={() => handleSort('price')} >
                    Price
                    <ArrowDownUp className={`inline-block size-4 mx-1 ${sortConfig.key === 'price' ? 'text-blue-500' : ''} ${sortConfig.direction === '123' && sortConfig.key === 'price' ? 'rotate-180' : ''}`} />
                </th>
            </tr>
        </thead>
    );

    if (!list.length) {
        return <div className="text-center p-8"><h1 className="text-gray-500">Loading...</h1></div>
    }

    return (
        <section>
            <div className="custom-container">
                <div className="overflow-hidden border border-light rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-light">
                        <TableHeader />
                        <tbody className="bg-white divide-y divide-light">
                            {currentItems.map((product) =>
                                <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="h-14 w-14 min-w-[3rem]">
                                            <img className="h-full w-full rounded-md object-cover" src={product.image} alt={product.name} />
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{product.name}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{product.category}</td>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">{product.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>


                <ul className="flex justify-center gap-1 mt-10 text-gray-900">
                    <li>
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="size-4" />
                        </button>
                    </li>


                    {[...Array(totalPages).keys()].map(number => (
                        <li key={number + 1}>
                            <button
                                onClick={() => paginate(number + 1)}
                                className={`block cursor-pointer size-8 rounded border text-center text-sm/8 font-medium transition-colors 
                                    ${currentPage === number + 1 ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-gray-200 hover:bg-gray-50'}`}
                            >
                                {number + 1}
                            </button>
                        </li>
                    ))}


                    <li>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
                            aria-label="Next page"
                        >
                            <ChevronRight className="size-4" />
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TableProduct;