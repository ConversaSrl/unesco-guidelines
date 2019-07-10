---
permalink: en-guidelines-04-media.html
guidelines-section: "guidelines"
guidelines-background: "background-green@2x.jpg"
title: Use appropriate media and tailor user interface for low-skilled and low-literate users
summary: "Digital solution design can best serve low-literate and low-skilled users by using appropriate media mixes, input methods and UI approaches. These design decisions are driven by user capabilities and the technology context of the users, including for example the devices to which they mostly have access, what the local infrastructure supports and what they can afford."
guidelines-step: "04"
guidelines-next-step: "05"
guidelines-next-label: "Provide initial and ongoing training and support"
guidelines-next-link: en-guidelines-05-support.html
---


# Inclusive design for all

While the guidelines do not explicitly focus on persons with disabilities, within the broader goal of digital inclusion UNESCO recommends that accessibility guidelines and standards are followed when developing digital solutions. Accessibility affects content as well as UI, and benefits persons with and without disabilities, including people with low literacy and new users (W3C, 2012). The Guidelines for Accessible Information (European Agency for Special Needs and Inclusive Education, 2015) and various guidelines from the W3C’s Web Accessibility Initiative provide ways to create more inclusive digital solutions for all.

# Consider mixing media and input methods for low-skilled and low-literate users

UIs and content of digital solutions are generally presented as four media types: text, images, audio or video, or in a combination of these elements. For example, SMS (short message service) or USSD (unstructured supplementary service data) can be used for text media, and interactive voice response (IVR) for an audio interface.
Input methods are generally based on typing, touch or voice, or again in a combination of these. Typing on an alphanumeric keypad to navigate a USSD or IVR menu, or open an SMS, is very common among digital solutions for low-skilled users. At the same time, in the UNESCO Landscape Review apps are the most common delivery channel, showing that touch is increasingly being used to support low-literate and low-skilled users.
The following approaches are recommended when designing solutions:

- **Ensure that the choice of media and delivery channel is appropriate for all the end-users.** The 3-2-1 Service in Zambia was initially offered only via SMS, a decision based on the official literacy statistics of the country. However, the team soon realized that many of the women they were trying to reach could not read.

- **Consider a delivery channel mix** to broaden access and engagement. The 3-2-1 Service now delivers content across a variety of channels. IVR is the most prominent and useful among callers with no or low literacy. SMS is available as a means of sending topic- related content snippets for those who can read.

- **Mix media**, for example accompany images and text with video or audio, to increase
the possibilities for user engagement. Print media can be an effective complement to digital media and should not be overlooked. Further, offering content in more than one language, in addition to the local language, is also desirable. Approaches such as these are useful for reinforcing communication and interaction. For example, menu options that are presented as images and read aloud by the device provide navigation scaffolding for low-literate user interaction.

**Ensure the input method is appropriate** to the audience. Most smartphone and tablet apps allow touch and typing,
offering a richer input mix. Voice input, while traditionally difficult to implement, is increasingly accessible for developers. The potential to **leverage advances in voice computing**, found in commercial services such as Amazon’s Alexa, is also increasing for the wider developer community – although the languages supported will be limited to mainstream ones for some time.

**Experiment with innovative form factors**, such as wearable technology or ruggedized audio players, to potentially increase interaction opportunities for users. While Khushi Baby’s wearable necklace only stores data, the possibility for using a wearable
to interact with users and smartphones is already widespread in commercial use cases, such as fitness tracking bracelets.


The UNESCO Landscape Review presents a working typology for digital solutions, including the range of functions, delivery channels, access devices,
UI options, content types, support options and
affordances for low-skilled and low-literate users, which can provide a useful reference point for developing and categorizing digital solutions.



# Design for maximum usability for low-skilled and low-literate users

In general, following UI best practices is good for all users, not only those who are low-skilled and low-literate. Since around 2012 there has been a trend towards simpler and flatter interfaces, as can be seen in the products of companies like Apple, Google and Microsoft (Anderton, n.d.). Building on this trend, a number of design approaches can support low-skilled and low-literate users’ digital interactions:

- **Ensure consistency when applying design elements.** Low-skilled and low-literate users are easily confused when using technology, and if design elements are missing on some screens, such as navigation buttons or text, it can reduce users’ confidence in their ability to use a system.

- **Apply visual scaffolds** such as large icons and colour coding as a memory aid to show relationships between categories. Visual signposts in the digital solution can guide users to next steps, or back to where they came from. It is preferable to keep visual clutter to a minimum by not showing too many elements on one page or screen.

- Designing for easily intimidated audiences means the UI must **provide constant feedback** to reassure the user of their actions. Further, where content is played, for example as audio
or video, the **speed must be adjustable by the user**. Allowing users to pause and repeat content makes it easier for them to consume content in a way that supports reflection or discussion.

- **Where possible, minimize menu hierarchies and offer linear navigation.** Low-skilled
and low-literate users do not always realize that scroll bars lead to more content hidden offscreen. Minimizing the set of menu options and presenting them in a flat structure, where possible, is helpful.

- Usability extends beyond the UI and thus it is important to design solutions that are sensitive to low-resource settings. In effect this means **minimizing data load** as much as possible, allowing for **offline usage** so that users can download/upload data when a connection is available; and implementing responsive design so that apps and services work on a range of devices, including low-end ones.


{% include case_studies_slideshow.html
id="usecase_slideshow2"
background-color="blue"

slide1_title="Design for users’ particular context"
slide1_text="ABALOBI is a suite of mobile apps that targets small-scale fishers – both men and women – from South Africa’s coastal communities along different stages of the service chain, from harvest to post- harvest activities. In fine-tuning the UI and user experience of the mobile apps, one key design aspect the team had to consider
was that South African fishers work in cold waters and develop pronounced calluses on their hands. The team took account of this reality amongst its users by choosing to move to large checkboxes, drop-down arrows and other clickable icons, interface features more usable by those whose fingers have low sensitivity."
slide1_link="en.unesco.org/themes/literacy-all/pearson-initiative/case-studies"
slide1_image="mobile_app.jpg"

%}
