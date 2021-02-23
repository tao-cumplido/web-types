export interface HTMLHyperlinkElementUtils {
	readonly origin: string;
	href: string;
	protocol: string;
	username: string;
	password: string;
	host: string;
	hostname: string;
	port: '' | `${number}`;
	pathname: string;
	search: string;
	hash: string;
}
