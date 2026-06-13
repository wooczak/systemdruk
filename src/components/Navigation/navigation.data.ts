export type OfferLink = { text: string; href: string };
export type OfferColumn = { category: string; links: OfferLink[] };

const offerColumns = [
	{
		category: "Druk offsetowy i cyfrowy",
		links: [
			{ text: "Wizytówki", href: "/oferta/wizytowki-system-druk-krakow" },
			{ text: "Notesy", href: "/oferta/notesy-system-druk-krakow" },
			{ text: "Katalogi szyte", href: "/oferta/katalogi-szyte-system-druk-krakow" },
			{ text: "Katalogi klejone", href: "/oferta/katalogi-klejone-system-druk-krakow" },
			{ text: "Katalogi z registrami", href: "/oferta/katalogi-z-registrami-system-druk-krakow" },
			{ text: "Segregatory", href: "/oferta/segregatory-system-druk-krakow" },
			{ text: "Plakaty", href: "/oferta/plakaty-system-druk-krakow" },
			{ text: "Ulotki", href: "/oferta/ulotki-system-druk-krakow" },
			{ text: "Teczki firmowe", href: "/oferta/teczki-firmowe-system-druk-krakow" },
			{ text: "Papier firmowy", href: "/oferta/papier-firmowy-system-druk-krakow" },
			{ text: "Kalendarze", href: "/oferta/kalendarze-system-druk-krakow" },
			{ text: "Biuwary", href: "/oferta/biuwary-system-druk-krakow" },
			{ text: "Karty plastikowe", href: "/oferta/karty-plastikowe-system-druk-krakow" },
			{ text: "Opakowania kartonowe", href: "/oferta/opakowania-kartonowe-system-druk-krakow" },
		],
	},
	{
		category: "Gadżety reklamowe",
		links: [
			{ text: "Gadżety biurowe", href: "/oferta/gadzety-biurowe-system-druk-krakow" },
			{ text: "Ceramika z nadrukiem", href: "/oferta/ceramika-system-druk-krakow" },
			{ text: "Smycze reklamowe", href: "/oferta/smycze-system-druk-krakow" },
			{ text: "Parasole z logo", href: "/oferta/parasole-system-druk-krakow" },
			{ text: "Koszulki z logo", href: "/oferta/koszulki-system-druk-krakow" },
			{ text: "Breloki", href: "/oferta/breloki-system-druk-krakow" },
			{ text: "Pendrive", href: "/oferta/pendrive-system-druk-krakow" },
			{ text: "Kalendarze firmowe", href: "/oferta/kalendarze-firmowe-system-druk-krakow" },
			{ text: "Notesy biurkowe", href: "/oferta/notesy-biurkowe-system-druk-krakow" },
			{ text: "Elektronika z logo", href: "/oferta/elektronika-system-druk-krakow" },
		],
	},
	{
		category: "Reklama zewnętrzna",
		links: [
			{ text: "Rollupy reklamowe", href: "/oferta/rollupy-system-druk-krakow" },
			{ text: "Ścianki reklamowe", href: "/oferta/scianki-system-druk-krakow" },
			{ text: "Ścianki LED", href: "/oferta/scianki-led-system-druk-krakow" },
			{ text: "Standy", href: "/oferta/standy-system-druk-krakow" },
			{ text: "Flagi reklamowe", href: "/oferta/flagi-system-druk-krakow" },
			{ text: "Trybunki i lady", href: "/oferta/trybunki-system-druk-krakow" },
			{ text: "Obrusy firmowe", href: "/oferta/obrusy-system-druk-krakow" },
			{ text: "Namioty reklamowe", href: "/oferta/namioty-system-druk-krakow" },
			{ text: "Kasetony i pylony", href: "/oferta/kasetony-system-druk-krakow" },
			{ text: "Reklama świetlna", href: "/oferta/reklama-swietlna-system-druk-krakow" },
			{ text: "Reklama 3D", href: "/oferta/reklama-3d-system-druk-krakow" },
		],
	},
	{
		category: "Pudełka i torby z logo",
		links: [
			{ text: "Torby bawełniane", href: "/oferta/torby-bawe%C5%82niane-system-druk-krakow" },
			{ text: "Torby papierowe", href: "/oferta/torby-papierowe-system-druk-krakow" },
			{ text: "Torby firmowe", href: "/oferta/torby-firmowe-system-druk-krakow" },
			{ text: "Torby na wino", href: "/oferta/torby-na-wino-system-druk-krakow" },
			{ text: "Pudełka z magnesem", href: "/oferta/pudelka-z-magnesem-system-druk-krakow" },
			{ text: "Pudełka fasonowe", href: "/oferta/pudelka-fasonowe-system-druk-krakow" },
			{ text: "Pudełka z nadrukiem", href: "/oferta/pudelka-nadruk-system-druk-krakow" },
			{ text: "Nadruk na pudełkach", href: "/oferta/nadruk-pudelka-system-druk-krakow" },
			{ text: "Projekty firmowe", href: "/oferta/projekty-firmowe-system-druk-krakow" },
		],
	},
] as const;

export default offerColumns
