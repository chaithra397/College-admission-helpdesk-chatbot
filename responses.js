function getBotResponse(input) {
    input = input.toLowerCase().trim();

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hello! Welcome to the College Admission Helpdesk. How can I assist you today?";
    }

    if (input.includes("course") || input.includes("program") || input.includes("degree")) {
        return "We offer B.Tech, B.Sc, B.Com, B.A, MBA, and more. Which course are you interested in?";
    }

    if (input.includes("admission") || input.includes("apply") || input.includes("application")) {
        return "Admissions can be done online. Visit our Admissions page and fill out the form.";
    }

    if (input.includes("fee") || input.includes("fees") || input.includes("tuition")) {
        return "The fee varies by course. Please specify the course you want fee details for.";
    }

    if (input.includes("hostel") || input.includes("accommodation")) {
        return "Yes, hostels are available for both boys and girls with Wi-Fi, food, and 24/7 security.";
    }

    if (input.includes("contact") || input.includes("email") || input.includes("phone")) {
        return "You can email us at admissions@college.edu or call +91-9876543210.";
    }

    if (input.includes("scholarship") || input.includes("financial aid")) {
        return "We offer merit and need-based scholarships. Check our Scholarships section.";
    }

    if (input.includes("document") || input.includes("required paper")) {
        return "You need 10th & 12th marksheets, ID proof, photos, and transfer certificate.";
    }

    if (input.includes("eligibility") || input.includes("minimum marks")) {
        return "Minimum 50% in 12th required. Some courses need specific subjects.";
    }

    if (input.includes("placement") || input.includes("job") || input.includes("company") || input.includes("recruiter")) {
        return "Top recruiters include Infosys, TCS, Capgemini, Wipro. We have 90% placement.";
    }

    if (input.includes("library") || input.includes("lab") || input.includes("facility")) {
        return "We have a central library, modern labs, Wi-Fi campus, and sports facilities.";
    }

    if (input.includes("address") || input.includes("location") || input.includes("where")) {
        return "We’re located at Tech Park Road, Mangalore, Karnataka - 575001.";
    }

    if (input.includes("website") || input.includes("portal")) {
        return "Visit us at https://college-admission.edu";
    }

    if (input.includes("admission date") || input.includes("deadline") || input.includes("last date")) {
        return "The last date to apply is 15th August 2025. Hurry up!";
    }

    return "Sorry, I didn't understand that. Can you please rephrase your question?";
}

module.exports = getBotResponse;
