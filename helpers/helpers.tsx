import { FirstLevelMenuItem} from '@/interfaces/menu.interface';
import CoursesIcon from '@/components/MenuClient/icons/courses.svg';
import ServicesIcon from '@/components/MenuClient/icons/services.svg';
import BooksIcon from '@/components/MenuClient/icons/books.svg';
import ProductsIcon from '@/components/MenuClient/icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const priceUa = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');