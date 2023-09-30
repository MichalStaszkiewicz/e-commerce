import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center  ${inter.className}`}>
			<div style={{ width: "100%", height: '100px' }}>
				<div className="row-space-between" style={{height: '100px'}}>


					<form action="" className="site-block-top-search">
						<FontAwesomeIcon className="icon-search2" icon={icons.faMagnifyingGlass}  />

						<input type="text" style={{ fontSize: '20px' }} className="form-control border-0" placeholder="Search" />

					</form>

					<div style={{ width: "50%", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					>
						<div className="site-logo">
							<a href="/" style={{ letterSpacing: "6px" }} className="js-logo-clone">SHOPPERS</a>
						</div>
					</div>

					<div className='side-nav'>
						<FontAwesomeIcon icon={icons.faShoppingCart} style={{ color: "#8c92a0" }} />
					</div>


				</div>
				<div className="row-space-between" style={{ height: '100px', borderTop: '0.1px solid #8c92a0',width:"100%",marginTop:"30px" }}>
				</div>

			</div>

		</main >
	)
}
