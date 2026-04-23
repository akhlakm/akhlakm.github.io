export const experiences = [
	{
		company: "Matmerize, Inc.",
		time: "Aug 2024 – Present",
		title: "Product Innovation Manager",
		location: "Atlanta, GA",
		description: "",
		bullets: [
			"PFAS-free fluoropolymer replacements: designed a multi-tier, halogen-free screening pipeline against a target multi-property envelope; delivered reaction-template-anchored candidate lists with synthetic-accessibility scoring.",
			"Bespoke membrane polymer design for industrial clients: encoded client-specific multi-property performance envelopes, ran generative homopolymer screens, and hand-designed copolymer architectures with composition-vs-property analyses for client R&D teams.",
			"Proton-exchange membranes for green hydrogen: built an uncertainty-aware screening pipeline across the full PEM performance envelope; validated against industry-standard membranes and delivered halogen-free, synthesizable candidates. Co-author on the resulting manuscript.",
			"Formulation → performance ML for industrial consumer products: curated heterogeneous formulation, supplier, and lab data with physics-aware rheology handling; built a zero-leakage nested-CV framework with interpretability panels and a benchmarking CLI used by the client's team.",
			"<a href='https://www.askpoly.io' target='_blank' rel='noopener noreferrer' class='text-accent hover:underline'>ASKPOLY</a> (sole developer, public launch 2024): Matmerize's LLM-based conversational polymer expert, fine-tuned models over polymer literature and internal knowledge base; enabled tenant-isolated customer fine-tuning.",
		],
	},
	{
		company: "Georgia Institute of Technology",
		time: "May 2023 – Jul 2024",
		title: "Postdoctoral Fellow, Ramprasad Group, MSE",
		location: "Atlanta, GA",
		description: "",
		bullets: [
			"Built an NLP pipeline over ~2.4M journal articles combining named-entity recognition and LLM-based extractors; produced a literature-scale dataset across 24 polymer properties, now backing <a href='https://polymerscholar.org' target='_blank' rel='noopener noreferrer' class='text-accent hover:underline'>polymerscholar.org</a> and Matmerize's downstream property models (Comm. Materials 2024).",
			"Developed a <a href='https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma.202408774' target='_blank' rel='noopener noreferrer' class='text-accent hover:underline'>classical-MD protocol for thermoset polymer systems</a> and glass-transition temperature measurement, supporting the group's additive-manufacturing program.",
			"Co-authored studies on LLM-based polymer solubility prediction (ACS Materials Letters 2025), LLM benchmarking for polymer properties (Macromol. Rapid Commun. 2025), organic-solar-cell design (npj Comp. Mater. 2025), and PET-replacement copolymer design (Phys. Rev. Materials 2026).",
		],
	},
	{
		company: "NC State University",
		time: "May 2018 – Apr 2023",
		title: "Graduate Research Assistant, Yingling Group, MSE",
		location: "Raleigh, NC",
		description: "",
		bullets: [
			"Developed the first all-atom MD method for magnetic nanoparticles with explicit Zeeman alignment and dipolar interactions; shipped as the open-source lammps-mspin LAMMPS plugin (J. Chem. Theory Comput. 2022).",
			"Characterized solvent-driven ligand stripping and ligand exchange on colloidal nanoparticles through all-atom MD; mapped solvent-chemistry effects and agglomeration inhibition (ACS Nano 2023; Adv. Mater. Interfaces 2025).",
			"Applied ML on small heterogeneous experimental data, Gaussian-process regression, genetic algorithms, active learning, data imputation, to optimize silica-shell synthesis on gold nanorods (Chem. Mater. 2024) and groundwater-contaminant risk analysis (Env. Sci. Technol. 2024).",
		],
	},
];

export const education = [
	{
		school: "NC State University",
		time: "2017 – 2023",
		degree: "Ph.D. in Physics",
		location: "Raleigh, NC",
		description: "Graduate Certification in Materials Informatics.",
	},
	{
		school: "NC State University",
		time: "2017 – 2020",
		degree: "M.S. in Physics",
		location: "Raleigh, NC",
		description: "",
	},
	{
		school: "University of Dhaka",
		time: "2011 – 2016",
		degree: "B.S. in Physics",
		location: "Dhaka, Bangladesh",
		description: "",
	},
];

export const skills = [
	{
		title: "Materials Design and Informatics",
		description:
			"Multi-property polymer design under entangled trade-offs; multi-task / multi-target co-learning; active learning on small data sets; generative polymer design under regulatory (TSCA) and synthetic-accessibility constraints; formulation optimization; reaction-template-based candidate generation (RxnChainer); polymer fingerprinting (Polymer Genome, PolyBERT, PolyGNN).",
	},
	{
		title: "Application Domains",
		description:
			"Polymer dielectrics and capacitive energy storage; proton-exchange membranes (PEMs) and solid polymer electrolytes (SPEs) for fuel cells and Li-ion batteries; sustainable and biodegradable polymers (PET replacements, PHAs); industrial coatings and resin formulations; nonwovens; nanoparticle self-assembly and colloidal nanomaterials; soft-matter and bio-organic interfaces.",
	},
	{
		title: "Simulation",
		description:
			"All-atom and coarse-grained molecular dynamics (AMBER, LAMMPS, including plugin development); classical force-field development; DFT-based property generation; RDKit; in-silico characterization of mechanical, thermal, optical, and electronic properties.",
	},
	{
		title: "AI and Machine Learning",
		description:
			"Large language models (domain fine-tuning, RAG, agentic systems); transformer and BERT models; graph neural networks; Gaussian-process regression; genetic algorithms; Bayesian optimization; data imputation; literature-scale NLP extraction. Production delivery in Python, PostgreSQL, and AWS.",
	},
];

export const publications = [
	{
		title: "AI-driven design of poly(ethylene terephthalate) replacement copolymers",
		authors: "C. Kim, W. Xiong, A. Mahmood, R. Ramprasad, H. Tran",
		journal: "Physical Review Materials 10(3), 033806",
		time: "2026",
		link: "",
		abstract: "",
	},
	{
		title: "Polymer solubility prediction using large language models",
		authors: "S. Agarwal, A. Mahmood, R. Ramprasad",
		journal: "ACS Materials Letters 7(6), 2017–2023",
		time: "2025",
		link: "",
		abstract: "",
	},
	{
		title: "Benchmarking large language models for polymer property predictions",
		authors: "S. Gupta, A. Mahmood, S. Shukla, R. Ramprasad",
		journal: "Macromolecular Rapid Communications, e00388",
		time: "2025",
		link: "",
		abstract: "",
	},
	{
		title: "Data extraction from polymer literature using large language models",
		authors: "S. Gupta, A. Mahmood, P. Shetty, A. Adeboye, R. Ramprasad",
		journal: "Communications Materials 5(1), 269",
		time: "2024",
		link: "",
		abstract: "",
	},
	{
		title:
			"Multiple data imputation methods advance risk analysis and treatability of co-occurring inorganic chemicals in groundwater",
		authors:
			"A. Mahmood, M. Islam, A. V. Gulyuk, E. Briese, C. A. Velasco, M. Malu, et al.",
		journal: "Environmental Science & Technology 58(46), 20513–20524",
		time: "2024",
		link: "",
		abstract: "",
	},
	{
		title:
			"Machine learning and small-data-guided optimization of silica shell morphology on gold nanorods",
		authors: "A. Mahmood, M. M. Ghelardini, J. B. Tracy, Y. G. Yingling",
		journal: "Chemistry of Materials 36(19), 9330–9340",
		time: "2024",
		link: "",
		abstract: "",
	},
	{
		title:
			"All-atom simulation method for Zeeman alignment and dipolar assembly of magnetic nanoparticles",
		authors: "A. Mahmood, Y. G. Yingling",
		journal: "Journal of Chemical Theory and Computation 18(5), 3122–3135",
		time: "2022",
		link: "",
		abstract: "",
	},
];

export const talks = [
	{
		title: "ACS Spring 2026",
		location: "Atlanta, GA",
		description:
			"Polymer and formulation informatics: Achievements and strategic next steps.",
	},
	{
		title: "ACS Spring 2026",
		location: "Atlanta, GA",
		description:
			"AI-driven polymers and formulations innovations at the industrial scale.",
	},
	{
		title: "ACS Spring 2025",
		location: "San Diego, CA",
		description:
			"Automating Polymer Design and Chemical Discovery using Generative Modeling.",
	},
	{
		title: "IDEA25 / FiltXPO 2025",
		location: "Miami Beach, FL",
		description:
			"Unlocking the Future of Nonwovens: AI-Driven Polymer Informatics for Sustainable Innovation.",
	},
	{
		title: "MRS Fall 2024",
		location: "Boston, MA",
		description:
			"Design of Functional and Sustainable Polymers Assisted by AI.",
	},
];
