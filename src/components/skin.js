import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { StyledService, StyledContent, StyledLogoMobileContainer, StyledServiceTittle, StyledServicePrice, StyledServiceDesc, StyledTittle, StyledServiceNote, StyledContentM } from "../styles/js/content"


const Skin = ({ children }) => (
    <>
        <StyledLogoMobileContainer>
            <StaticImage
                className="container-logo"
                imgClassName="logo"
                src="../images/logo.png"
                alt="gaia logo skin"
                loading="eager"
                width={539}
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                quality='80'
            />
            <h1>Gaia Evolution</h1>
            <h2>SKIN CARE</h2>
        </StyledLogoMobileContainer>
        <StyledContent>
            <StyledService>
                <StyledServiceNote>
                    Facial Add -On Service $35.00
                </StyledServiceNote>
                <StyledServiceNote>
                    Microcurrent or LED Light $38.00
                </StyledServiceNote>
            </StyledService>
            <StyledService>
                <StyledTittle>
                    ENZYME FACIALS
                </StyledTittle>
                <StyledServiceNote>
                    All Products used are natural derived and/or organic certified. Include gentle hand, neck massage or hand exfoliation in the 60 minutes facial. Skin analysis is included in the cost.
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Men Customized Facial
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $95
                </StyledServicePrice>
                <StyledServiceDesc>
                    Deeply purifying and detox facial routine balances stress skin packed with steam, extractions, enzyme to exfoliate skin naturally,  mask natural derived to fit your skin type. Enjoying a neck or hand and arm massage.
                </StyledServiceDesc>
            </StyledService>

            <StyledContentM>
                <StyledService m>
                    <StyledServiceTittle m>
                        Aveda Tulasara Facial
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $129
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        This treatment is customized to target all skin concern including; dry, aging, acneic, and sensitive skin
                    </StyledServiceDesc>
                </StyledService>

                <StyledService m>
                    <StyledServiceTittle m>
                        Aveda Tulasara Facial
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $129
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        This treatment is customized to target all skin concern including; dry, aging, acneic, and sensitive skin
                    </StyledServiceDesc>
                </StyledService>
            </StyledContentM>
            <StyledContentM>
                <StyledService m>
                    <StyledServiceTittle m>
                        Aveda Tulasara Dual Exfoliation Peel
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $139
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        The treatment delivers immediate, visible results improving skin texture and radiance; smoothed appearance of fine, dry lines
                    </StyledServiceDesc>
                </StyledService>

                <StyledService m>
                    <StyledServiceTittle m>
                        Aveda Plant Peel Package (3 Sessions)
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $249
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        Visibly evens your skin tone, refines the look of pores and provides the instant exfoliation and radiance benefits  </StyledServiceDesc>
                </StyledService>
            </StyledContentM>

            <StyledService>
                <StyledServiceTittle>
                    Aveda Stress Relief Treatment
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $129
                </StyledServicePrice>
                <StyledServiceDesc>
                    Stress Relieving treatment is designed to bring relaxation and balance to a highly stressed back and face. The skin on the face and is cleansed, lightly massaged, and hydrated. Then the skin on the back is cleansed and exfoliated follow up by a light relaxing massage on the back, neck and shoulder area. Hand  and arm massage is also included. Add-ons can be included
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledTittle>
                    Customized Enzyme Facial Package Buy 3 Services Save 15%   $242
                </StyledTittle>
                <StyledServiceNote>
                    Recommending the best facial that fit your needs! Packed with Cleansing, Steam, Extractions, Enzyme, Masque
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Customized Enzyme Facial
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $95
                </StyledServicePrice>
                <StyledServiceDesc>
                    This 60 min treatment is customized to target all skin concern including; dry, aging, acneic, and sensitive skin.
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledTittle>
                    Gaia Signature Package Buy 3 Save 15%  $405
                </StyledTittle>

            </StyledService>


            <StyledContentM>
                <StyledService m>
                    <StyledServiceTittle m>
                        Gaia Signature Facial
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        90 min $179
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        Perfect for anti-aging and all skin types. Packed with Microdermabrasion (1 pass), Hydro-dermabrasion (2 passes), Oxygenation Collagen or Brightening Serum and masque selected to fit your skin type. Hand and neck massage included
                    </StyledServiceDesc>
                </StyledService>

                <StyledService m>
                    <StyledServiceTittle m>
                        Aveda Hydrating Belly Treatment
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        30min $65
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        Hydrate the belly with this facial designed to soothe and nourish the skin while aiding in the prevention of stretch marks. Pregnancy safe ingredients, vitamins, and minerals are used to restore hydration to the skin.
                        **There is no guarantee of prevention of stretch marks

                    </StyledServiceDesc>
                </StyledService>
            </StyledContentM>

            <StyledService>
                <StyledTittle>
                    Chemical Peel/ Package Buy 3 for Only          $354
                </StyledTittle>
            </StyledService>

            <StyledContentM>
                <StyledService m>
                    <StyledServiceTittle m>
                        Cranberry Turnover Organic Peel
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $129
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        Acne. Oily and acne skin – Inflamed and postural   acne. Resurfaces and refines the skin and pores, remove oil and debris, excellent antioxidant, and inhibits inflammation
                    </StyledServiceDesc>
                </StyledService>

                <StyledService m>
                    <StyledServiceTittle m>
                        Glycolic Peel
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $139
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        All Normal, Oily, and Acneic Skin. Desquamates skin cell, exfoliates, soften, reduces keratinization, treat mild to moderate acne, minimizing pore size
                    </StyledServiceDesc>
                </StyledService>
            </StyledContentM>

            <StyledContentM>
                <StyledService m>
                    <StyledServiceTittle m>
                        Hyperpigmentation Peel
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $129
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        For hyperpigmentation skin, Sun damage
                    </StyledServiceDesc>
                </StyledService>

                <StyledService m>
                    <StyledServiceTittle m>
                        Lactic Peel
                    </StyledServiceTittle>
                    <StyledServicePrice m>
                        60 min $139
                    </StyledServicePrice>
                    <StyledServiceDesc>
                        Dry, Sun damage, and Hyperpigmentation Skin. Exfoliate, Soften, Hydrates, and lightens skin

                    </StyledServiceDesc>
                </StyledService>
            </StyledContentM>


            <StyledService>
                <StyledTittle>
                    RESURFACING THERAPIES
                </StyledTittle>
            </StyledService>

            <StyledService>
                <StyledTittle>
                    Microdermabrasion/ Package Buy 3 for Only          $354
                </StyledTittle>
                <StyledServiceNote>
                    Removing all skin dead cells.
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Microdermabrasion
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $139
                </StyledServicePrice>
                <StyledServiceDesc>
                    Use of high-tech tips to rejuvenate dull, tired looking skin through exfoliation. This sloughs off the dead layers of skin at the levels of skin called the epidermis, improving the look of sun spots, acne scarring, fine lines and wrinkles. Due to the gentle irritation that us done intentionally. It also stimulates collagen formation at the lower level of skin called dermis.
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledTittle>
                    Hydrodermabrasion / Package Buy 3 for Only          $354
                </StyledTittle>
                <StyledServiceNote>
                    All Skin Types; No discomfort or downtime, non-invasive and non-irritating
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Hydrodermabrasion
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $139
                </StyledServicePrice>
                <StyledServiceDesc>
                    Hydrodermabrasion procedure that combines cleansing, exfoliation, extraction, hydration and antioxidant protection simultaneously. Packed with multivitamins and finishing with Hyaluronic acid.
                </StyledServiceDesc>
            </StyledService>


            <StyledService>
                <StyledTittle>
                    Anti-Aging Facial / Package Buy 3 Save 15%         $497
                </StyledTittle>
                <StyledServiceNote>
                    Reduce fine lines & wrinkles. Packed with basic Microdermabrasion, Hydra dermabrasion, Radio-frequency, Ultrasound, Micro-current and Cryotherapy
                </StyledServiceNote>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Anti-Aging Facial
                </StyledServiceTittle>
                <StyledServicePrice>
                    80 min $199
                </StyledServicePrice>
                <StyledServiceDesc>
                    Reduce fine lines & wrinkles. Anti-aging that works perfectly on Epidermis and Dermis (skin layers) to repair damaged skin and stimulate collagen and elastin production. Provide circulatory benefits and re-educate the muscles of the face. This service includes multivitamins, hyaluronic acid to penetrate into the skin. Packed with Micro-current, basic Microderm, basic Hydroderm, Radio Frequency, Ultrasound and ending with Cold Therapy
                </StyledServiceDesc>
            </StyledService>
            <StyledService>
                <StyledServiceTittle>
                    LED Light Therapy
                </StyledServiceTittle>
                <StyledServicePrice>
                    30 min $65
                </StyledServicePrice>
                <StyledServiceDesc>
                    Skin Cleansing, Manual Exfoliation, Serum and LED Light. Helps Reduce Swelling & Puffiness, Anti-Aging & Acne
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledTittle>
                    BODY TREATMENTS
                </StyledTittle>
            </StyledService>


            <StyledService>
                <StyledServiceTittle>
                    Under Arm Hyperpigmented Skin
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $89
                </StyledServicePrice>
                <StyledServiceDesc>
                    It is a treatment performed on under arm. Treats to removes dead skin cells, helps with hyperpigmentation- dark skin. Packed with Enzyme, High Frequency, Cryotherapy and Jelly Mask! It is recommended 2 days post under arm wax or the same day depending on your comfort level
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Aveda Back Facial
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $105
                </StyledServicePrice>
                <StyledServiceDesc>
                    Customized treatment to address your specific needs.  Some benefits are; provide luminosity, cell revitalizing, oxygenation, toning, detoxifying, moisturizing. Add on treatment $50.00 (30min)
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Aveda Tulasara Acne Relief Back Facial
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $115
                </StyledServicePrice>
                <StyledServiceDesc>
                    Customized treatment to address your specific needs.  Some benefits are; provide luminosity, cell revitalizing, oxygenation, toning, detoxifying, moisturizing. Add on treatment $50.00 (30min)
                </StyledServiceDesc>
            </StyledService>

            <StyledService>
                <StyledServiceTittle>
                    Aveda Radiance Body Wrap & Polish
                </StyledServiceTittle>
                <StyledServicePrice>
                    60 min $105
                </StyledServicePrice>
                <StyledServiceDesc>
                    An exfoliant and moisturizing treatment with mineral dead sea salts in a base of organic rich plant oils featuring the uplifting of Aveda's aroma, leaving the skin smooth, soft and hydrated add on treatment $50.00 (30min)
                </StyledServiceDesc>
            </StyledService>
            <StyledService>
                <StyledServiceTittle>
                    Chakra Balancing Ionic Foot Bath
                </StyledServiceTittle>
                <StyledServicePrice>
                    30 min $35
                </StyledServicePrice>
                <StyledServiceDesc>
                    Benefits; Purging of Heavy Metals, Balance pH Level, Reducing Inflammation, Internal Cleansing with Fully Body Purge, Enhancing Inmune System. Detoxify the body through the skin
                </StyledServiceDesc>
            </StyledService>
            <StyledService>
                <StyledServiceNote>
                    **Appointment Necessary for Skin Care Services**
                </StyledServiceNote>
            </StyledService>
        </StyledContent>


    </>
)


export default Skin