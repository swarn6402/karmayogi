const GITA_QUOTES = [
  {
    verse: "2.41",
    sanskrit: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥",
    transliteration: "vyavasāyātmikā buddhir ekeha kurunandana.\nbahuśākhā hy anantāś ca buddhayo 'vyavasāyinām.",
    translation: "On this path, O joy of the Kurus, the resolute intellect is one-pointed; the thoughts of the irresolute branch endlessly in many directions.",
    context: "Buddhi Yoga begins with unified attention instead of a scattered, distracted mind"
  },
  {
    verse: "2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana.\nmā karmaphalahetur bhūr mā te saṅgo 'stv akarmaṇi.",
    translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Do not act for reward, and do not become attached to inaction.",
    context: "The foundational verse of Karma Yoga: focus on duty, not on craving the outcome"
  },
  {
    verse: "2.48",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration: "yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya.\nsiddhyasiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate.",
    translation: "Established in yoga, perform action, O Dhanañjaya, abandoning attachment and remaining the same in success and failure; this equanimity is called yoga.",
    context: "True focus is steady effort without emotional whiplash from winning or losing"
  },
  {
    verse: "2.49",
    sanskrit: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय।\nबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः॥",
    transliteration: "dūreṇa hy avaraṁ karma buddhiyogād dhanañjaya.\nbuddhau śaraṇam anviccha kṛpaṇāḥ phalahetavaḥ.",
    translation: "Action done for reward is far inferior to action guided by wisdom, O Dhanañjaya. Take refuge in disciplined understanding; those who chase fruits are poor in spirit.",
    context: "Krishna contrasts reward-driven work with higher, wisdom-led action"
  },
  {
    verse: "2.50",
    sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥",
    transliteration: "buddhiyukto jahātīha ubhe sukṛtaduṣkṛte.\ntasmād yogāya yujyasva yogaḥ karmasu kauśalam.",
    translation: "One united with wisdom casts off both good and bad reactions here. Therefore devote yourself to yoga; yoga is skill in action.",
    context: "Focused action is not clumsy force; it is disciplined excellence in how work is done"
  },
  {
    verse: "2.58",
    sanskrit: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥",
    transliteration: "yadā saṁharate cāyaṁ kūrmo 'ṅgānīva sarvaśaḥ.\nindriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā.",
    translation: "When one withdraws the senses from their objects, as a tortoise draws in its limbs from all sides, that person's wisdom is firmly established.",
    context: "A mark of the sthitaprajna is the ability to pull attention back from temptation"
  },
  {
    verse: "2.60",
    sanskrit: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः॥",
    transliteration: "yatato hy api kaunteya puruṣasya vipaścitaḥ.\nindriyāṇi pramāthīni haranti prasabhaṁ manaḥ.",
    translation: "Even for a striving and discerning person, O son of Kuntī, the turbulent senses can violently carry the mind away.",
    context: "Krishna is realistic: distraction is powerful, even for the sincere practitioner"
  },
  {
    verse: "2.61",
    sanskrit: "तानि सर्वाणि संयम्य युक्त आसीत मत्परः।\nवशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता॥",
    transliteration: "tāni sarvāṇi saṁyamya yukta āsīta matparaḥ.\nvaśe hi yasyendriyāṇi tasya prajñā pratiṣṭhitā.",
    translation: "Controlling all the senses, one should remain disciplined and centered in the Highest; the wisdom of the one whose senses are mastered stands firm.",
    context: "Steady wisdom requires both restraint and a higher anchor for the mind"
  },
  {
    verse: "2.62",
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    transliteration: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate.\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate.",
    translation: "When a person dwells on sense objects, attachment arises. From attachment comes desire, and from desire arises anger.",
    context: "Attention is never neutral; what the mind keeps revisiting begins to own it"
  },
  {
    verse: "3.7",
    sanskrit: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते॥",
    transliteration: "yas tv indriyāṇi manasā niyamyārabhate 'rjuna.\nkarmendriyaiḥ karmayogam asaktaḥ sa viśiṣyate.",
    translation: "But the one who controls the senses by the mind, O Arjuna, and engages the organs of action in karma yoga without attachment is superior.",
    context: "Discipline is not withdrawal alone; it is right action performed with inner control"
  },
  {
    verse: "3.8",
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
    transliteration: "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ.\nśarīrayātrāpi ca te na prasiddhyed akarmaṇaḥ.",
    translation: "Perform your bounden duty, for action is better than inaction. Even the maintenance of your body is not possible through inaction.",
    context: "Krishna directly rejects laziness and avoidance masquerading as spirituality"
  },
  {
    verse: "3.19",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara.\nasakto hy ācaran karma param āpnoti pūruṣaḥ.",
    translation: "Therefore, always perform the work that ought to be done, without attachment; by acting without attachment, a person attains the Supreme.",
    context: "Karma Yoga is sustained duty done steadily and without clinging"
  },
  {
    verse: "3.30",
    sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।\nनिराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः॥",
    transliteration: "mayi sarvāṇi karmāṇi saṁnyasyādhyātmacetasā.\nnirāśīr nirmamo bhūtvā yudhyasva vigatajvaraḥ.",
    translation: "Surrender all actions to Me with your consciousness rooted in the Self. Free from expectation and possessiveness, fight without inner fever.",
    context: "One of the strongest anti-anxiety verses in the Gita: act fully, but without mental agitation"
  },
  {
    verse: "3.34",
    sanskrit: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ।\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ॥",
    transliteration: "indriyasyendriyasyārthe rāgadveṣau vyavasthitau.\ntayor na vaśam āgacchet tau hy asya paripanthinau.",
    translation: "Each sense has its own attraction and aversion toward its objects. One should not come under their sway, for they are obstacles on the path.",
    context: "Focus collapses when we let likes and dislikes steer our attention"
  },
  {
    verse: "3.35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    transliteration: "śreyān svadharmo viguṇaḥ paradharmāt sv anuṣṭhitāt.\nsvadharme nidhanaṁ śreyaḥ paradharmo bhayāvahaḥ.",
    translation: "Better one's own duty, though imperfectly done, than another's duty performed well. Better to die in one's own dharma; another's path is fraught with fear.",
    context: "Comparison and imitation scatter energy; the Gita keeps returning us to our own work"
  },
  {
    verse: "3.41",
    sanskrit: "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ।\nपाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम्॥",
    transliteration: "tasmāt tvam indriyāṇy ādau niyamya bharatarṣabha.\npāpmānaṁ prajahi hy enaṁ jñānavijñānanāśanam.",
    translation: "Therefore, O best of the Bharatas, first control the senses and destroy this sinful force that ruins knowledge and realization.",
    context: "The Gita says to confront the enemy of distraction early, before it captures the mind"
  },
  {
    verse: "3.43",
    sanskrit: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना।\nजहि शत्रुं महाबाहो कामरूपं दुरासदम्॥",
    transliteration: "evaṁ buddheḥ paraṁ buddhvā saṁstabhyātmānam ātmanā.\njahi śatruṁ mahābāho kāmarūpaṁ durāsadam.",
    translation: "Knowing that which is higher than the intellect, and steadying the lower self by the higher Self, O mighty-armed one, conquer the enemy in the form of desire.",
    context: "This is the inward battle plan: use higher understanding to master compulsive craving"
  },
  {
    verse: "4.18",
    sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्॥",
    transliteration: "karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ.\nsa buddhimān manuṣyeṣu sa yuktaḥ kṛtsnakarmakṛt.",
    translation: "One who sees inaction in action and action in inaction is truly wise among people; such a person is integrated and has understood action completely.",
    context: "The deepest focus is inner stillness in the middle of outward work"
  },
  {
    verse: "4.19",
    sanskrit: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः।\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः॥",
    transliteration: "yasya sarve samārambhāḥ kāmasaṅkalpavarjitāḥ.\njñānāgnidagdhakarmāṇaṁ tam āhuḥ paṇḍitaṁ budhāḥ.",
    translation: "The wise call that person learned whose undertakings are free from selfish desire and whose actions have been burned in the fire of knowledge.",
    context: "Disciplined action is marked by clean intention, not by restless wanting"
  },
  {
    verse: "4.20",
    sanskrit: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।\nकर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः॥",
    transliteration: "tyaktvā karmaphalāsaṅgaṁ nityatṛpto nirāśrayaḥ.\nkarmaṇy abhipravṛtto 'pi naiva kiñcit karoti saḥ.",
    translation: "Having abandoned attachment to the fruits of action, ever content and depending on nothing, one does nothing at all in the binding sense, though fully engaged in work.",
    context: "Inner freedom comes when work is no longer a search for completion through results"
  },
  {
    verse: "6.5",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet.\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ.",
    translation: "One should lift oneself by oneself and not let oneself fall. The mind alone is the friend of the self, and the mind alone is the self's enemy.",
    context: "This verse frames self-mastery as the central contest of yoga"
  },
  {
    verse: "6.6",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    transliteration: "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ.\nanātmanas tu śatrutve vartetātmaiva śatruvat.",
    translation: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the same mind acts like an enemy.",
    context: "The restless mind is not merely inconvenient; it can actively sabotage a person's path"
  },
  {
    verse: "6.17",
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    transliteration: "yuktāhāravihārasya yuktaceṣṭasya karmasu.\nyuktasvapnāvabodhasya yogo bhavati duḥkhahā.",
    translation: "For one who is balanced in food, recreation, effort in work, sleep, and wakefulness, yoga becomes the destroyer of sorrow.",
    context: "Focus is supported by rhythm and moderation, not by self-destructive extremes"
  },
  {
    verse: "6.24",
    sanskrit: "सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः।\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः॥",
    transliteration: "saṅkalpaprabhavān kāmāṁs tyaktvā sarvānaśeṣataḥ.\nmanasaivendriyagrāmaṁ viniyamya samantataḥ.",
    translation: "Completely abandoning all desires born of mental projections, one should restrain the whole collection of senses on every side by the mind alone.",
    context: "Many distractions are manufactured internally before they ever appear externally"
  },
  {
    verse: "6.25",
    sanskrit: "शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया।\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥",
    transliteration: "śanaiḥ śanair uparamed buddhyā dhṛtigṛhītayā.\nātmasaṁsthaṁ manaḥ kṛtvā na kiñcid api cintayet.",
    translation: "Little by little one should become still through an intellect held firm by resolve. Having established the mind in the Self, one should think of nothing else.",
    context: "Mastery of attention is gradual and depends on patient, steady resolve"
  },
  {
    verse: "6.26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    transliteration: "yato yato niścarati manaś cañcalam asthiram.\ntatas tato niyamyaitad ātmany eva vaśaṁ nayet.",
    translation: "Wherever the restless and unsteady mind wanders, one should bring it back from there and place it again under the control of the Self.",
    context: "This is Krishna's direct instruction for refocusing: notice drift and return without drama"
  },
  {
    verse: "18.26",
    sanskrit: "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः।\nसिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते॥",
    transliteration: "muktasaṅgo 'nahaṁvādī dhṛtyutsāhasamanvitaḥ.\nsiddhyasiddhyor nirvikāraḥ kartā sāttvika ucyate.",
    translation: "The doer who is free from attachment and ego, endowed with firmness and enthusiasm, and unchanged in success or failure, is called sattvic.",
    context: "The Gita's model worker is detached, energetic, steady, and unshaken by results"
  },
  {
    verse: "18.30",
    sanskrit: "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये।\nबन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी॥",
    transliteration: "pravṛttiṁ ca nivṛttiṁ ca kāryākārye bhayābhaye.\nbandhaṁ mokṣaṁ ca yā vetti buddhiḥ sā pārtha sāttvikī.",
    translation: "That intellect is sattvic, O Pārtha, which knows engagement and withdrawal, what should be done and what should not be done, fear and fearlessness, bondage and liberation.",
    context: "Disciplined intelligence is the ability to distinguish clearly, not merely to think intensely"
  },
  {
    verse: "18.33",
    sanskrit: "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी॥",
    transliteration: "dhṛtyā yayā dhārayate manaḥprāṇendriyakriyāḥ.\nyogenāvyabhicāriṇyā dhṛtiḥ sā pārtha sāttvikī.",
    translation: "That unwavering determination by which one steadies the activities of the mind, life-force, and senses through yoga is called sattvic firmness, O Pārtha.",
    context: "Steady resolve is what keeps the whole inner system aligned with the chosen path"
  },
  {
    verse: "18.35",
    sanskrit: "यया स्वप्नं भयं शोकं विषादं मदमेव च।\nन विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी॥",
    transliteration: "yayā svapnaṁ bhayaṁ śokaṁ viṣādaṁ madam eva ca.\nna vimuñcati durmedhā dhṛtiḥ sā pārtha tāmasī.",
    translation: "That determination by which a deluded person does not give up sleep, fear, grief, depression, and intoxication is called tamasic, O Pārtha.",
    context: "A direct warning about inertia: tamas holds the mind in dullness, fear, and emotional heaviness"
  }
];

function getRandomQuote() {
  return GITA_QUOTES[Math.floor(Math.random() * GITA_QUOTES.length)];
}

if (typeof window !== "undefined") {
  window.GITA_QUOTES = GITA_QUOTES;
  window.getRandomQuote = getRandomQuote;
}
