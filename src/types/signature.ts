export interface EndUserCertificateInfoEx {
  isFilled: boolean;
  version: number;
  issuer: string;
  issuerCN: string;
  serial: string;
  subject: string;
  subjCN: string;
  subjOrg: string;
  subjOrgUnit: string;
  subjTitle: string;
  subjState: string;
  subjLocality: string;
  subjFullName: string;
  subjAddress: string;
  subjPhone: string;
  subjEMail: string;
  subjDNS: string;
  subjEDRPOUCode: string;
  subjDRFOCode: string;
  subjNBUCode: string;
  subjSPFMCode: string;
  subjOCode: string;
  subjOUCode: string;
  subjUserCode: string;
  certBeginTime: Date;
  certEndTime: Date;
  isPrivKeyTimesAvail: boolean;
  privKeyBeginTime: Date;
  privKeyEndTime: Date;
  publicKeyBits: number;
  publicKey: string;
  publicKeyID: string;
  issuerPublicKeyID: string;
  keyUsage: string;
  extKeyUsages: string;
  policies: string;
  crlDistribPoint1: string;
  crlDistribPoint2: string;
  isPowerCert: boolean;
  isSubjTypeAvail: boolean;
  isSubjCA: boolean;
  chainLength: number;
  UPN: string;
  // publicKeyType: EndUserCertKeyType | number;
  // keyUsageType: EndUserKeyUsage | number;
  RSAModul: string;
  RSAExponent: string;
  OCSPAccessInfo: string;
  issuerAccessInfo: string;
  TSPAccessInfo: string;
  isLimitValueAvailable: boolean;
  limitValue: number;
  limitValueCurrency: string;
  subjType: number;
  subjSubType: number;
  subjUNZR: string;
  subjCountry: string;
  isQSCD: boolean;
  subjUserID: string;
}

export interface ReadKeyResponse {
  data: Uint8Array,
  infoEx: EndUserCertificateInfoEx,
}

export interface CAServer {
  issuerCNs: string[],
  address: string,
  ocspAccessPointAddress: string,
  ocspAccessPointPort: number,
  cmpAddress: string,
  tspAddress: string,
  tspAddressPort: number,
  directAccess: boolean,
  qscdSNInCert: boolean,
  certsInKey: boolean,
}
