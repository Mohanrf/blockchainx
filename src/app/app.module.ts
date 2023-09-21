import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';

import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './home/about/about.component';
import { PlatformComponent } from './home/platform/platform.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { HireComponent } from './home/hire/hire.component';
import { TechExpertiseComponent } from './home/tech-expertise/tech-expertise.component';
import { ClientsComponent } from './home/clients/clients.component';
import { AwardsComponent } from './home/awards/awards.component';
import { IndustriesListComponent } from './industries/industries-list/industries-list.component';
import { HealthcareComponent } from './industries/industries-list/healthcare/healthcare.component';
import { FinanceComponent } from './industries/industries-list/finance/finance.component';
import { InsuranceComponent } from './industries/industries-list/insurance/insurance.component';
import { RentalComponent } from './industries/industries-list/rental/rental.component';
import { SupplyChainComponent } from './industries/industries-list/supply-chain/supply-chain.component';
import { GameDevelopmentComponent } from './industries/industries-list/game-development/game-development.component';
import { AgricultureComponent } from './industries/industries-list/agriculture/agriculture.component';
import { RetailComponent } from './industries/industries-list/retail/retail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HyperledgerDevelopmentComponent } from './enterprise/hyperledger-development/hyperledger-development.component';
import { SmartContractDevelopmentComponent } from './enterprise/smart-contract-development/smart-contract-development.component';
import { DappsDevelopmentComponent } from './enterprise/dapps-development/dapps-development.component';
import { SolidityDevelopmentComponent } from './enterprise/solidity-development/solidity-development.component';
import { IpfsDevelopmentComponent } from './enterprise/ipfs-development/ipfs-development.component';
import { HashgraphDevelopmentComponent } from './enterprise/hashgraph-development/hashgraph-development.component';
import { DefiDevelopmentComponent } from './enterprise/defi-development/defi-development.component';
import { CryptoCurrencyDevelopmentComponent } from './services/crypto-currency-development/crypto-currency-development.component';
import { IcoCoinDevelopmentComponent } from './services/ico-coin-development/ico-coin-development.component';
import { StoCoinDevelopmentComponent } from './services/sto-coin-development/sto-coin-development.component';
import { IcoMarketingComponent } from './services/ico-marketing/ico-marketing.component';
import { Erc20TokenDevelopmentComponent } from './services/erc20-token-development/erc20-token-development.component';
import { CryptocurrencyExchangeDevelopmentComponent } from './services/cryptocurrency-exchange-development/cryptocurrency-exchange-development.component';
import { Bep20TokenDevelopmentComponent } from './services/bep20-token-development/bep20-token-development.component';

import { TronTokenDevelopmentComponent } from './services/tron-token-development/tron-token-development.component';
import { CordaBlockchainDevelopmentComponent } from './services/corda-blockchain-development/corda-blockchain-development.component';
import { CardanoBlockchainDevelopmentComponent } from './services/cardano-blockchain-development/cardano-blockchain-development.component';
import { DaoDevelopmentComponent } from './services/dao-development/dao-development.component';
import { DefiStakingPlatformComponent } from './services/defi-staking-platform/defi-staking-platform.component';
import { DefiYieldFarmingComponent } from './services/defi-yield-farming/defi-yield-farming.component';
import { NftGamingPlatformDevelopmentComponent } from './nft/nft-gaming-platform-development/nft-gaming-platform-development.component';
import { NftMarketplaceDevelopmentComponent } from './nft/nft-marketplace-development/nft-marketplace-development.component';
import { IcoDashboardScriptComponent } from './products/ico-dashboard-script/ico-dashboard-script.component';
import { DefiLendingSoftwareComponent } from './products/defi-lending-software/defi-lending-software.component';
import { DefiCryptoWalletSoftwareComponent } from './products/defi-crypto-wallet-software/defi-crypto-wallet-software.component';

import { ColdWalletIntegrationComponent } from './products/cold-wallet-integration/cold-wallet-integration.component';
import { UniswapCloneComponent } from './products/uniswap-clone/uniswap-clone.component';
import { TokenMigrationComponent } from './products/token-migration/token-migration.component';
import { BridgeSmartContractComponent } from './products/bridge-smart-contract/bridge-smart-contract.component';
import { CryptocurrencyLaunchpadComponent } from './products/cryptocurrency-launchpad/cryptocurrency-launchpad.component';
import { ServicesComponent } from './home/services/services.component';
import { MataverseComponent } from './home/mataverse/mataverse.component';
import { OurprocessComponent } from './home/ourprocess/ourprocess.component';
import { ExpertComponent } from './home/expert/expert.component';
import { ContactformComponent } from './shared/contactform/contactform.component';
import { BusinessTechStackComponent } from './shared/business-tech-stack/business-tech-stack.component';
import { LetDiscussComponent } from './shared/let-discuss/let-discuss.component';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { NftMarketplaceDevelopment } from './nft/nft-development-company/nft-development-company.component';
import { MetaverseDevelopmentCompanyComponent } from './metaverse-development/metaverse-development.component';
import { ZukiComponent } from './case-studies/zuki/zuki.component';
import { MinosisComponent } from './case-studies/minosis/minosis.component';
import { StarcardSportsGamesComponent } from './case-studies/starcard-sports-games/starcard-sports-games.component';
import { EktachainComponent } from './case-studies/ektachain/ektachain.component';
import { BlockchainConsultingComponent } from './services/blockchain-consulting/blockchain-consulting.component';
import { WhyChooseComponent } from './shared/why-choose/why-choose.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SolanaDevelopmentComponent } from './enterprise/solana-development/solana-development.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogSingleDetailComponent } from './blog-single-detail/blog-single-detail.component';
import { NonFungibleComponent } from './nft/non-fungible/non-fungible.component';
import { CommentsComponent } from './comments/comments.component';
import { MythsAboutBlockchainComponent } from './blog-single-detail/myths-about-blockchain/myths-about-blockchain.component';
import { BlockchainVsBitcoinComponent } from './blog-single-detail/blockchain-vs-bitcoin/blockchain-vs-bitcoin.component';
import { TypesOfBlockchainComponent } from './blog-single-detail/types-of-blockchain/types-of-blockchain.component';
import { BlockchainVsDistributedLedgerComponent } from './blog-single-detail/blockchain-vs-distributed-ledger/blockchain-vs-distributed-ledger.component';
import { HyperledgerFabricComponent } from './blog-single-detail/hyperledger-fabric/hyperledger-fabric.component';
import { BlockchainForGovernmentComponent } from './blog-single-detail/blockchain-for-government/blockchain-for-government.component';
import { WhatIsDefiComponent } from './blog-single-detail/what-is-defi/what-is-defi.component';
import { HowToInvestInBitcoinComponent } from './blog-single-detail/how-to-invest-in-bitcoin/how-to-invest-in-bitcoin.component';
import { UseCasesOfDefiComponent } from './blog-single-detail/use-cases-of-defi/use-cases-of-defi.component';
import { DefiProjectsComponent } from './blog-single-detail/defi-projects/defi-projects.component';
import { WhatIsPolkadotComponent } from './blog-single-detail/what-is-polkadot/what-is-polkadot.component';
import { AdvantagesOfNftComponent } from './blog-single-detail/advantages-of-nft/advantages-of-nft.component';
import { EverythingAboutMetaverseComponent } from './blog-single-detail/everything-about-metaverse/everything-about-metaverse.component';
import { TopMetaverseProjectsComponent } from './blog-single-detail/top-metaverse-projects/top-metaverse-projects.component';
import { WhatIsGamefiComponent } from './blog-single-detail/what-is-gamefi/what-is-gamefi.component';
import { EverythingAboutSubstrateComponent } from './blog-single-detail/everything-about-substrate/everything-about-substrate.component';
import { FutureOfNftApplicationsComponent } from './blog-single-detail/future-of-nft-applications/future-of-nft-applications.component';
import { EverythingAboutNftMarketplaceComponent } from './blog-single-detail/everything-about-nft-marketplace/everything-about-nft-marketplace.component';
import { NftUsedInDefiComponent } from './blog-single-detail/nft-used-in-defi/nft-used-in-defi.component';
import { BlogSidebarComponent } from './blog-single-detail/blog-sidebar/blog-sidebar.component';
import { NftRoleInMetaverseComponent } from './blog-single-detail/nft-role-in-metaverse/nft-role-in-metaverse.component';
import { BlockchainEmpowerWomenComponent } from './blog-single-detail/blockchain-empower-women/blockchain-empower-women.component';
import { FlowBlockchainComponent } from './blog-single-detail/flow-blockchain/flow-blockchain.component';
import { NftSportsComponent } from './blog-single-detail/nft-sports/nft-sports.component';
import { NftVulnerabilityComponent } from './blog-single-detail/nft-vulnerability/nft-vulnerability.component';
import { NftBrandsComponent } from './blog-single-detail/nft-brands/nft-brands.component';
import { PrimaryTechnologyInMetaverseComponent } from './blog-single-detail/primary-technology-in-metaverse/primary-technology-in-metaverse.component';
import { MetaverseBusinessComponent } from './blog-single-detail/metaverse-business/metaverse-business.component';
import { SolanaPolygonEthComponent } from './blog-single-detail/solana-polygon-eth/solana-polygon-eth.component';
import { EverythingAboutWeb3Component } from './blog-single-detail/everything-about-web3/everything-about-web3.component';
import { FuturesOfMetaverseComponent } from './blog-single-detail/futures-of-metaverse/futures-of-metaverse.component';
import { AdaptInvestMetaverseComponent } from './blog-single-detail/adapt-invest-metaverse/adapt-invest-metaverse.component';
import { NftGimmickComponent } from './blog-single-detail/nft-gimmick/nft-gimmick.component';
import { BlockchainIdentityManagementComponent } from './blog-single-detail/blockchain-identity-management/blockchain-identity-management.component';
import { NftInsightsComponent } from './blog-single-detail/nft-insights/nft-insights.component';
import { FiveBlockchainUseCaseComponent } from './blog-single-detail/five-blockchain-use-case/five-blockchain-use-case.component';
import { BlockchainInfrastructureComponent } from './blog-single-detail/blockchain-infrastructure/blockchain-infrastructure.component';
import { BlockchainInnovationComponent } from './blog-single-detail/blockchain-innovation/blockchain-innovation.component';
import { BlockchainSolvesProblemsComponent } from './blog-single-detail/blockchain-solves-problems/blockchain-solves-problems.component';
import { BlockchainHealthcareComponent } from './blog-single-detail/blockchain-healthcare/blockchain-healthcare.component';
import { DefiVsCefiComponent } from './blog-single-detail/defi-vs-cefi/defi-vs-cefi.component';
import { BlockchainRustComponent } from './blog-single-detail/blockchain-rust/blockchain-rust.component';
import { PolkadotParachainComponent } from './blog-single-detail/polkadot-parachain/polkadot-parachain.component';
import { HashgraphVsBlockchainComponent } from './blog-single-detail/hashgraph-vs-blockchain/hashgraph-vs-blockchain.component';
import { MetaverseInRealestateComponent } from './blog-single-detail/metaverse-in-realestate/metaverse-in-realestate.component';
import { WhatIsDaoComponent } from './blog-single-detail/what-is-dao/what-is-dao.component';
import { SolanaProofComponent } from './blog-single-detail/solana-proof/solana-proof.component';
import { StellarConsensusProtocolComponent } from './blog-single-detail/stellar-consensus-protocol/stellar-consensus-protocol.component';
import { WhatIsIsoComponent } from './blog-single-detail/what-is-iso/what-is-iso.component';
import { NftStakingComponent } from './blog-single-detail/nft-staking/nft-staking.component';
import { CreateNftMarketplaceComponent } from './blog-single-detail/create-nft-marketplace/create-nft-marketplace.component';
import { MetaverseUseCaseBenefitsComponent } from './blog-single-detail/metaverse-use-case-benefits/metaverse-use-case-benefits.component';
import { EnduringTechnologiesComponent } from './blog-single-detail/enduring-technologies/enduring-technologies.component';
import { AvoidMistakeMarketplaceComponent } from './blog-single-detail/avoid-mistake-marketplace/avoid-mistake-marketplace.component';
import { NftEverytingAboutNftMetaversesComponent } from './blog-single-detail/nft-everyting-about-nft-metaverses/nft-everyting-about-nft-metaverses.component';
import { BestDefiPlatformsComponent } from './blog-single-detail/best-defi-platforms/best-defi-platforms.component';
import { MultifunctionalNftComponent } from './blog-single-detail/multifunctional-nft/multifunctional-nft.component';
import { TopBlockchainPlatformsComponent } from './blog-single-detail/top-blockchain-platforms/top-blockchain-platforms.component';
import { StaticVsDynamicNftComponent } from './blog-single-detail/static-vs-dynamic-nft/static-vs-dynamic-nft.component';
import { NftCryptopunksComponent } from './blog-single-detail/nft-cryptopunks/nft-cryptopunks.component';
import { NftSecurityTipsComponent } from './blog-single-detail/nft-security-tips/nft-security-tips.component';
import { KeyFeatureOfMetaverseComponent } from './blog-single-detail/key-feature-of-metaverse/key-feature-of-metaverse.component';
import { BuildVirtualWorldComponent } from './blog-single-detail/build-virtual-world/build-virtual-world.component';
import { BestMetaverseKnowAboutComponent } from './blog-single-detail/best-metaverse-know-about/best-metaverse-know-about.component';
import { BuildMetaverseWorldComponent } from './blog-single-detail/build-metaverse-world/build-metaverse-world.component';
import { AiMeetMetaverseComponent } from './blog-single-detail/ai-meet-metaverse/ai-meet-metaverse.component';
import { NftAutionsComponent } from './blog-single-detail/nft-autions/nft-autions.component';
import { NftRoyaltiesComponent } from './blog-single-detail/nft-royalties/nft-royalties.component';
import { NftMusicMarketplaceComponent } from './blog-single-detail/nft-music-marketplace/nft-music-marketplace.component';
import { HealthcareManagementComponent } from './blog-single-detail/healthcare-management/healthcare-management.component';
import { HowToCreateNftMarketplaceComponent } from './blog-single-detail/how-to-create-nft-marketplace/how-to-create-nft-marketplace.component';
import { PhygitalNftComponent } from './blog-single-detail/phygital-nft/phygital-nft.component';
import { Erc115Component } from './blog-single-detail/erc115/erc115.component';
import { CreateMetaversePlatformComponent } from './blog-single-detail/create-metaverse-platform/create-metaverse-platform.component';
import { CrowdfundingScriptComponent } from './products/crowdfunding-script/crowdfunding-script.component';
import { MarketplacesolanaComponent } from './blog-single-detail/marketplacesolana/marketplacesolana.component';
import { NftmarketplaconavalancheComponent } from './blog-single-detail/nftmarketplaconavalanche/nftmarketplaconavalanche.component';
import { BlockchainxInSupplyChainComponent } from './blog-single-detail/blockchainx-in-supply-chain/blockchainx-in-supply-chain.component';
import { SocialComponent } from './shared/social/social.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { NftDevelopmentCompanyNewComponent } from './nft/nft-development-company-new/nft-development-company-new.component';
import { BepNewComponent } from './services/bep-new/bep-new.component';
import { SocialShareComponent } from './shared/social-share/social-share.component';
import { DecentralizedIdentityInBlockchainComponent } from './blog-single-detail/decentralized-identity-in-blockchain/decentralized-identity-in-blockchain.component';
import { AiInWeb3GamingAndMetaverseComponent } from './blog-single-detail/ai-in-web3-gaming-and-metaverse/ai-in-web3-gaming-and-metaverse.component';
import { Erc20TokenDevelopmentNewComponent } from './services/erc20-token-development-new/erc20-token-development-new.component';
import { CreateNftMarketplacePolygonComponent } from './blog-single-detail/create-nft-marketplace-polygon/create-nft-marketplace-polygon.component';
import { CreatePermissionedBlockchainComponent } from './blog-single-detail/create-permissioned-blockchain/create-permissioned-blockchain.component';
import { SocialTokenHowUsedComponent } from './blog-single-detail/social-token-how-used/social-token-how-used.component';
import { TenMetaverseUseCasesExamplesForBusinessComponent } from './blog-single-detail/ten-metaverse-use-cases-examples-for-business/ten-metaverse-use-cases-examples-for-business.component';
import { AuthorComponent } from './author/author.component';

import { KeyFactorsInsightsSuccessfulNftMarketplaceComponent } from './blog-single-detail/key-factors-insights-successful-nft-marketplace/key-factors-insights-successful-nft-marketplace.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { NewDevelopmentComponent } from './new-development/new-development.component';
import { DecentralizedApplicationsRevolutionizingComponent } from './blog-single-detail/decentralized-applications-revolutionizing/decentralized-applications-revolutionizing.component';
import { FiveBestNftWalletsStoreComponent } from './blog-single-detail/five-best-nft-wallets-store/five-best-nft-wallets-store.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#f5d255',
  bgsOpacity: 0.8,
  bgsPosition: 'center-center',
  bgsSize: 100,
  bgsType: 'three-strings',
  blur: 15,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#36e7c4',
  fgsPosition: 'center-center',
  fgsSize: 120,
  fgsType: 'three-strings',
  gap: 87,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: '#040914',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 8,
  hasProgressBar: false,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: 1000,
  minTime: 300,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PlatformComponent,
    ShowcaseComponent,
    HireComponent,
    TechExpertiseComponent,
    ClientsComponent,
    AwardsComponent,
    IndustriesListComponent,
    HealthcareComponent,
    FinanceComponent,
    InsuranceComponent,
    RentalComponent,
    SupplyChainComponent,
    GameDevelopmentComponent,
    AgricultureComponent,
    RetailComponent,
    BlogComponent,
    ContactComponent,
    CaseStudiesComponent,
    TestimonialsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    HyperledgerDevelopmentComponent,
    SmartContractDevelopmentComponent,
    DappsDevelopmentComponent,
    SolidityDevelopmentComponent,
    IpfsDevelopmentComponent,
    HashgraphDevelopmentComponent,
    DefiDevelopmentComponent,
    CryptoCurrencyDevelopmentComponent,
    IcoCoinDevelopmentComponent,
    StoCoinDevelopmentComponent,
    IcoMarketingComponent,
    Erc20TokenDevelopmentComponent,
    CryptocurrencyExchangeDevelopmentComponent,
    Bep20TokenDevelopmentComponent,
    CreateMetaversePlatformComponent,
    TronTokenDevelopmentComponent,
    CordaBlockchainDevelopmentComponent,
    CardanoBlockchainDevelopmentComponent,
    DaoDevelopmentComponent,
    DefiStakingPlatformComponent,
    DefiYieldFarmingComponent,
    NftGamingPlatformDevelopmentComponent,
    NftMarketplaceDevelopmentComponent,
    IcoDashboardScriptComponent,
    DefiLendingSoftwareComponent,
    DefiCryptoWalletSoftwareComponent,
    CrowdfundingScriptComponent,
    ColdWalletIntegrationComponent,
    UniswapCloneComponent,
    TokenMigrationComponent,
    BridgeSmartContractComponent,
    CryptocurrencyLaunchpadComponent,
    ServicesComponent,
    MataverseComponent,
    OurprocessComponent,
    ExpertComponent,
    ContactformComponent,
    MetaverseDevelopmentCompanyComponent,
    BusinessTechStackComponent,
    LetDiscussComponent,
    NftMarketplaceDevelopment,
    ZukiComponent,
    MinosisComponent,
    StarcardSportsGamesComponent,
    EktachainComponent,
    BlockchainConsultingComponent,
    WhyChooseComponent,
    AboutUsComponent,
    SolanaDevelopmentComponent,
    BlogMainComponent,
    BlogSingleDetailComponent,
    NonFungibleComponent,
    CommentsComponent,
    MythsAboutBlockchainComponent,
    BlockchainVsBitcoinComponent,
    TypesOfBlockchainComponent,
    BlockchainVsDistributedLedgerComponent,
    HyperledgerFabricComponent,
    BlockchainForGovernmentComponent,
    WhatIsDefiComponent,
    HowToInvestInBitcoinComponent,
    UseCasesOfDefiComponent,
    DefiProjectsComponent,
    WhatIsPolkadotComponent,
    AdvantagesOfNftComponent,
    EverythingAboutMetaverseComponent,
    TopMetaverseProjectsComponent,
    WhatIsGamefiComponent,
    EverythingAboutSubstrateComponent,
    FutureOfNftApplicationsComponent,
    EverythingAboutNftMarketplaceComponent,
    NftUsedInDefiComponent,
    BlogSidebarComponent,
    NftRoleInMetaverseComponent,
    BlockchainEmpowerWomenComponent,
    FlowBlockchainComponent,
    NftSportsComponent,
    NftVulnerabilityComponent,
    NftBrandsComponent,
    PrimaryTechnologyInMetaverseComponent,
    MetaverseBusinessComponent,
    SolanaPolygonEthComponent,
    EverythingAboutWeb3Component,
    FuturesOfMetaverseComponent,
    AdaptInvestMetaverseComponent,
    NftGimmickComponent,
    BlockchainIdentityManagementComponent,
    NftInsightsComponent,
    FiveBlockchainUseCaseComponent,
    BlockchainInfrastructureComponent,
    BlockchainInnovationComponent,
    BlockchainSolvesProblemsComponent,
    BlockchainHealthcareComponent,
    DefiVsCefiComponent,
    BlockchainRustComponent,
    PolkadotParachainComponent,
    HashgraphVsBlockchainComponent,
    MetaverseInRealestateComponent,
    WhatIsDaoComponent,
    SolanaProofComponent,
    StellarConsensusProtocolComponent,
    WhatIsIsoComponent,
    NftStakingComponent,
    CreateNftMarketplaceComponent,
    MetaverseUseCaseBenefitsComponent,
    EnduringTechnologiesComponent,
    AvoidMistakeMarketplaceComponent,
    NftEverytingAboutNftMetaversesComponent,
    BestDefiPlatformsComponent,
    MultifunctionalNftComponent,
    TopBlockchainPlatformsComponent,
    StaticVsDynamicNftComponent,
    NftCryptopunksComponent,
    NftSecurityTipsComponent,
    KeyFeatureOfMetaverseComponent,
    BuildVirtualWorldComponent,
    BestMetaverseKnowAboutComponent,
    BuildMetaverseWorldComponent,
    AiMeetMetaverseComponent,
    NftAutionsComponent,
    NftRoyaltiesComponent,
    NftMusicMarketplaceComponent,
    HealthcareManagementComponent,
    HowToCreateNftMarketplaceComponent,
    PhygitalNftComponent,
    Erc115Component,
    MarketplacesolanaComponent,
    NftmarketplaconavalancheComponent,
    BlockchainxInSupplyChainComponent,
    SocialComponent,
    NotFoundComponent,
    NftDevelopmentCompanyNewComponent,
    BepNewComponent,
    SocialShareComponent,
    DecentralizedIdentityInBlockchainComponent,
    AiInWeb3GamingAndMetaverseComponent,
    Erc20TokenDevelopmentNewComponent,
    CreateNftMarketplacePolygonComponent,
    CreatePermissionedBlockchainComponent,
    SocialTokenHowUsedComponent,
    TenMetaverseUseCasesExamplesForBusinessComponent,
    AuthorComponent,

    KeyFactorsInsightsSuccessfulNftMarketplaceComponent,

    NewDevelopmentComponent,
    DecentralizedApplicationsRevolutionizingComponent,
    FiveBestNftWalletsStoreComponent,
  ],
  imports: [
    BrowserModule,
    NgxLoaderModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    CommonModule,
    NgxPopperjsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
    }),
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
