import Values from './Values';

class Calculator {

	constructor() {
		this.bills = [];
		this.users = [];

		this.analysis = null;
		this.balances = null;
		this.operations = null
	}


	setData(bills, users) {
		this.bills = bills;
		this.users = users;
	}

	calculate() {
		return new Promise((resolve, _) => {
			const trans = this.analyze();
			this.generateBalances(trans);
			this.findOperations();

			resolve();
		});
	}

	analyze() {
		const analysis = [];
		const trans = [];

		this.bills.forEach(bill => {
			const title = bill.title + ', ' + bill.date;
			const subTitle = '$' + bill.total + ', ' + bill.payer;

			let total = parseFloat(bill.total);

			// init payments
			const payments = {};
			this.users.forEach(user => payments[user] = 0);

			// handle sub bills
			bill.subBills.forEach(sub => {
				const amount = parseFloat(sub.amount);
				payments[sub.user] += amount;

				total -= amount;
			});

			// add remaining
			const each = total / this.users.length;
			Object.keys(payments).forEach(user => {
				payments[user] += each;

				if (payments[user] < Values.MIN_AMOUNT) delete payments[user];
				else if (user !== bill.payer) trans.push([ user,  bill.payer, payments[user] ]);
			});

			analysis.push({
				title:    title,
				subTitle: subTitle,
				payments: payments
			});
		});

		this.analysis = analysis;

		return trans;
	}

	generateBalances(trans) {
		const debts = {};
		this.users.forEach(user => debts[user] = 0);

		trans.forEach(tran => {
			debts[tran[0]] += tran[2];
			debts[tran[1]] -= tran[2];
		});

		this.balances = [];

		Object.keys(debts).forEach(user => {
			if (Math.abs(debts[user]) > Values.MIN_AMOUNT) this.balances.push({
				user: user,
				debt: debts[user]
			});
		});
	}

	findOperations() {
		const balances = this.balances.map(balance => Object.assign({}, balance));

		this.operations = Calculator.dfs(balances, 0);
	}

	static dfs(balances, curr) {
		while (curr < balances.length && balances[curr].debt === 0) curr++;

		if (curr === balances.length) return [];

		let minLen = Values.MAX_VALUE;
		let minPath = [];

		const isGiving = balances[curr].debt > 0;

		let index = curr + 1;
		while (index < balances.length) {
			if (balances[index].debt * balances[curr].debt < 0) {
				balances[index].debt += balances[curr].debt;

				const subPath = Calculator.dfs(balances, curr + 1);
				if (subPath.length + 1 < minLen) {
					minLen = subPath.length + 1;

					const str = isGiving ?
						balances[curr].user + ' => ' + balances[index].user + ' $' + balances[curr].debt.toFixed(2)
						: balances[index].user + ' => ' + balances[curr].user + ' $' + (-balances[curr].debt).toFixed(2);

					minPath = [ str ].concat(subPath);
				}

				balances[index].debt -= balances[curr].debt;
			}

			index++;
		}

		return minPath;
	}

	getAnalysis() {
		return this.analysis;
	}

	getBalances() {
		return this.balances;
	}

	getOperations() {
		return this.operations;
	}

}


export default Calculator;
