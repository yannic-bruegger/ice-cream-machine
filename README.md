# Ice Cream Machine - Software Testing Role-Play Exercise

> **Note**: This is an **independent implementation** of the ice cream machine described in the paper ["There's a Bug in your Ice-cream: Teaching Software Testing with Role-plays"](https://dl.acm.org/doi/10.1145/3724363.3729115) by Charlotte Pierce and Eda Yench (ITiCSE 2025). This implementation is **not affiliated** with the original authors and is made publicly available for educational purposes.

## What is This?

This is an educational tool for teaching **black-box software testing** techniques. The program simulates a buggy ice cream vending machine where students can practice identifying defects through systematic testing.

### The Original Role-Play Concept

The original exercise from the paper is designed to be performed **without any software implementation**:
- Some students pretend to be **"the software"** (following buggy machine instructions from paper materials)
- Other students act as **"testers"** who must discover the bugs through careful testing
- This interactive, human-centered approach helps students understand testing strategies, edge cases, and critical thinking in test design

**The role-play format (without software) is highly effective and recommended!** It promotes:
- Active engagement and collaboration
- Real-time feedback and discussion
- Understanding of the tester-developer relationship
- Communication skills for bug reporting

### This Software Implementation

This implementation offers a **different learning focus**:
- Practice testing against **actual software** with bugs
- Learn to use testing tools and document findings systematically
- Experience automated vs. manual testing workflows
- Analyze code behavior and write reproducible bug reports
- Use as a quick demo or for remote/asynchronous learning scenarios

Both approaches have value - the role-play emphasizes human interaction and testing mindset, while this implementation focuses on practical software testing skills.

## The Ice Cream Machine

The machine allows customers to select:
- **Flavour**: Vanilla, Funfetti, or Choc Mint
- **Topping**: Sprinkles, Nuts, or Chocolate
- **Receptacle**: Cone or Cup

### Known Bugs 🐛

This implementation contains several intentional bugs for students to discover:

1. **Funfetti Auto-Complete Bug** (lines 47-51)
   - If you select Funfetti, the machine immediately dispenses without asking for topping/receptacle choice
   - It automatically gives you sprinkles in a cup

2. **Forced Cone Bug** (line 95)
   - Even if you select "Cup", the machine always gives you a **cone**
   - The receptacle choice is completely ignored

3. **Choc Mint Topping Override** (lines 63-64, 73-74)
   - If you select Choc Mint with ANY topping, you always get **nuts**
   - Both sprinkles and chocolate selections are overridden

4. **Vanilla + Chocolate Bug** (lines 77-79)
   - Selecting Vanilla with Chocolate topping changes your flavour to **Funfetti**
   - Your vanilla ice cream mysteriously becomes funfetti!

## Installation & Usage

### Prerequisites
- [Deno](https://deno.land/) v2.x or later

### Running Locally

```bash
cd rp-2
deno run --allow-read --allow-env main.ts
```

### Download Pre-compiled Binaries

Pre-compiled binaries for multiple platforms are available in [GitHub Releases](../../releases):

- **Windows** (x86_64): `ice-cream-machine-windows-x64.exe`
- **macOS** (ARM64): `ice-cream-machine-macos-arm64`
- **Linux** (x86_64): `ice-cream-machine-linux-x64`
- **Linux** (ARM64): `ice-cream-machine-linux-arm64`

Download and run directly - no installation required!

## Educational Use

### Learning Objectives

This exercise helps students practice:
- **Black-box testing** techniques
- **Test case design** and selection
- **Edge case identification**
- **Critical thinking** about software behavior
- **Systematic testing** approaches

### Suggested Testing Activities

1. **Exploratory Testing**: Try different combinations and observe unexpected behaviors
2. **Test Case Documentation**: Document steps to reproduce each bug
3. **Equivalence Partitioning**: Group inputs into classes that should behave similarly
4. **Boundary Testing**: Test edge cases and unusual input combinations
5. **Bug Reporting**: Practice writing clear, reproducible bug reports

## CI/CD Pipeline

This repository includes a GitHub Actions workflow that:
- ✅ Compiles binaries for multiple platforms on every push to `main`
- ✅ Automatically creates pre-releases with downloadable binaries
- ✅ Generates versioned releases when tags are pushed

See [.github/workflows/build.yml](.github/workflows/build.yml) for details.

## Credits & Acknowledgments

This implementation is inspired by the role-play exercises described in:
- **Paper**: "There's a Bug in your Ice-cream: Teaching Software Testing with Role-plays"
- **Authors**: Charlotte Pierce & Eda Yench (Monash University)
- **Conference**: ITiCSE 2025 (30th ACM Conference on Innovation and Technology in Computer Science Education)
- **Original Materials**: [GitHub - role-play-exercises-for-software-testing](https://github.com/charlottepierce/role-play-exercises-for-software-testing)

**Disclaimer**: This is an independent, public implementation and is **not affiliated with or endorsed by** the original authors. For the official role-play materials and instructions, please refer to the original research paper and GitHub repository linked above.

## License

This independent implementation is provided for educational purposes. Please cite the original research paper when using these materials in educational contexts.

---

*Can you find all the bugs? Happy testing! 🍦🐛*
