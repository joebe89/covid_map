import NextHead from 'next/head';

function Head({title = '', description = ''}) {
	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" sizes="192x192" href="/public/touch-icon.png" />
			<link rel="apple-touch-icon" href="/public/touch-icon.png" />
			<link rel="mask-icon" href="/public/favicon-mask.svg" color="#49B882" />
			<link rel="icon" href="/public/favicon.ico" />
		</NextHead>
	);
}

export default Head;
