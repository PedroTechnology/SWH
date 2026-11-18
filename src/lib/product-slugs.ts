export const productSlugsBySku: Record<string, string> = {
  "WEA-EPJ414L": "appliance-firewall-pfsense-WEA-EPJ414L",
  "WEA-SW1P4L": "appliance-firewall-pfsense-WEA-SW1P4L",
  "WEA-ROJ414L": "appliance-firewall-pfsense-WEA-ROJ414L",
  "WEA-ROJ416L": "appliance-firewall-pfsense-WEA-ROJ416L",
  "WEA-GTJ646L": "appliance-firewall-pfsense-WEA-GTJ646L",
  "WEA-AT1581N": "appliance-firewall-pfsense-WEA-AT1581N",
  "WEA-F592JE": "appliance-firewall-pfsense-WEA-F592JE",
  "WEA-AT1781": "appliance-firewall-pfsense-WEA-AT1781",
  "WEA-ATC236": "appliance-firewall-pfsense-WEA-ATC236",
  "WEA-F594JE": "appliance-pabx-ip-WEA-F594JE",
  "WEA-F792JE": "appliance-pabx-ip-WEA-F792JE",
  "WEC-BLJ41MS2": "pc-industrial-fanless-WEC-BLJ41MS2",
  "WEC-BLCI3400SU": "pc-industrial-fanless-WEC-BLCI3400SU",
  "WEC-BLCI55200U": "pc-industrial-fanless-WEC-BLCI55200U",
};

const productSkusBySlug = Object.fromEntries(
  Object.entries(productSlugsBySku).map(([sku, slug]) => [slug, sku]),
);

export function getProductSlug(sku: string): string {
  return productSlugsBySku[sku] ?? sku;
}

export function getProductSku(routeParam: string): string {
  return productSkusBySlug[routeParam] ?? routeParam;
}
